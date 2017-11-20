import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Author } from'../models/author';

@Injectable()
export class AuthorsService {

  readonly usersPath = "authors";
  public authorMapStream: AngularFireObject<Map<string, Author>>;
  authorObserv: any;
  constructor(private db: AngularFireDatabase) {
    this.authorMapStream = this.db.object(this.usersPath);
   }

  updateUser(authorKey: string, username: string, photoUrl: string){
    const author = new Author(username, photoUrl);

    this.db.object(`/${this.usersPath}/${authorKey}`).set(author);
    this.authorObserv = this.authorMapStream.snapshotChanges();
    this.authorObserv.subscribe();

  }

}

