import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import { AuthorsService } from './authors.service';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

  authState: any = null;
  database;

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              private router:Router, private authorsService: AuthorsService) {

    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });

    this.db.object('user').snapshotChanges().map(action => {
      const $key = action.payload.key;
      const data = { $key, ...action.payload.val() };
      return data;
    }).subscribe(item => console.log(item.$key));
    this.database = firebase.database();
  }

  // Returns true if user is logged in
  authenticated(): boolean {
    return firebase.auth().currentUser !== null;
  }

  // Returns current user data
  currentUser(): any {
    return firebase.auth().currentUser;
  }

  // Returns
  currentUserObservable(): any {
    return this.afAuth.authState
  }

  // Returns current user UID
  currentUserId(): string {
    return this.authenticated() ? firebase.auth().currentUser.uid : '';
  }

  // Returns current user from firebase
  currentUserDB(): any {
    var userId = this.currentUserId();
    return this.database.ref('/users/' + userId).once('value').then(snapshot => {return snapshot.val();});
  }

  // Anonymous User
  currentUserAnonymous(): boolean {
    return this.authenticated() ? this.authState.isAnonymous : false
  }

  // Returns current user display name or Guest
  currentUserDisplayName(): string {
    if (!this.authState) { return 'Guest' }
    else if (this.currentUserAnonymous) { return 'Anonymous' }
    else { return this.authState['displayName'] || 'User without a Name' }
  }

  //// Social Auth ////
  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider()
    return this.socialSignIn(provider);
  }

  googleLogin() {
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token.
        var token = result.credential.accessToken;
      }
      var user = result.user;
    });
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.socialSignIn(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return this.socialSignIn(provider);
  }

  twitterLogin(){
    const provider = new firebase.auth.TwitterAuthProvider()
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then(credential =>  {
          this.authState = credential.user;
          var user = credential.user;
          debugger;
          this.writeUserData(user.uid, user.displayName, user.email, user.photoURL, "password");
          console.log("Push the user to database");
          this.authorsService.updateUser(user.uid, user.displayName, user.photoURL);
          this.router.navigate(['dashboard'])
      })
      .catch(error => console.log(error));
  }


  //// Anonymous Auth ////
  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously()
    .then(user => {
      this.authState = user
      this.updateUserData()
    })
    .catch(error => console.log(error));
  }

  //// Email/Password Auth ////
  emailSignUp(email:string, password:string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        this.updateUserData()
      })
      .catch(error => console.log(error));
  }

  emailLogin(email:string, password:string) {
     return this.afAuth.auth.signInWithEmailAndPassword(email, password)
       .then((user) => {
         this.authState = user
         this.updateUserData()
       })
       .catch(error => console.log(error));
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    var auth = firebase.auth();

    return auth.sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }


  //// Sign Out ////
  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['home'])
  }

  findUser(userId: string) {
    if (this.isUserInDB(userId)){
      return firebase.database().ref('/users/' + userId).once('value').then ( u => {
            return u.val();
          });
    }
    return null;
  }


  //// Helpers ////
  private isUserInDB(userId: string) {
    return this.database.ref('/users').once('value').then ( users => {
            return userId in users;
          });
  }

  writeUserData(userId: string, name: string, email: string, imageUrl: string, password: string) {
    this.database.ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl,
      pwd: password,
      appointments: [new Date().toLocaleString()]
    });
  }

  private updateUserData(): void {
  // Writes user name and email to realtime db
  // useful if your app displays information about users or for admin features
    let path = `users/${this.currentUserId()}`; // Endpoint on firebase
    let data = {
                  email: this.authState.email,
                  name: this.authState.displayName
                }

    this.db.object(path).update(data)
    .catch(error => console.log(error));

  }




}
