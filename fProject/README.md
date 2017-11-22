# Final Project

The application will provide information about Nail Salon services, nail design made by salon, available appointments.
When user login he will be navigated to his profile, where he can see upcoming appointments, request the new appointment request and see designs he liked. He also can take the survey, that will help Nail Salon has the feedback of preferred services, client styles preferences that can help improve its services.

In Chat Bot Client can ask questions:
1. When is the next available day for appointment?
2. What the current most popular color?
3. What the most popular nails shape?
4. What the least attractive color for the season?

## FEATURES and COMPONENTS:
1. Login Component
	-add Login with facebook and Gmail using FIrebase Authentication
	-when app is loaded the user should be routed to the login page
	-After user successfully logged in he navigates to his profile page
	-when the user types an unknown path in the url, the app redirects the user back to the home/login page

2. Google Analytics
	-Create a free google developers account and enable google analytics.  Google has great documentation for this
	- Copy paste the code snippet into the head tag of your index.html file including your GA-NUMBER.
	- Add a google analytics event to your login component that sends an event to google analytics when a user successfully logs in.  You can use an event category of “csc436” and an event action of “user-login”.
	- If your analytics is working you should be able to login into your google account and see the realtime login event sent to your analytics account.
	- gtag('event', { event_category: 'csc436', event_cction: 'login', event_label: 'authorized'});

3. User Profile
	- In the main view add an icon that when clicked navigates to the profile component
	- Contains information about upcoming appointments
	- User Profile visible only after user login
	- User can request new appointment
	- Displays 4 the most recent liked designs

4. Data Summary
	- In the main view add a link “Summary” that when click navigates to the summary component.
	- Dispalys the summary of the survey which nail designs and shapes are the most popular right now.

5. Question Control Service
	- From group of questions from stored in firebase questions
	- Retrieves list of questions from firebase database
	- Updates answers to questions when survey was taken
	- Queries answers to questions to retrieve data about the survey and generates summary report for user: getBestShape(), getBestSColor(), getHatedColor(), getDesignResult(), getQualityImportance()

6. Survey
	- Displays questions to user to take the survey
	- Submit button, when clicked shows "Thank you" notification

7. Gallery
	- Displays nail designs that made in the salon
	- Contains control with which user can like/dislike the displayed design
	- Contains count of how many likes design got
	- Contains search component that will display works by specified tag: for example summer, red, blue etc.
	- If user logged in and liked the image, sends this information to firebase storage, so that this image can be displayed on user profile page later
8. Landing Page
	- Contains 2 Login buttons: one for login with facebook, another with gmail
	- Contains Navigation Bar to Gallery, Survey, Summary, User Profile and Logout button if user logged in
	- If user logged in also shows just general citation

9. Chat Bot
	- Hidden originally, will be visible after user logged in and clicked icon on the Main page
	- Contain input for users question
	- Contains button Submit, when clicked will perform query search and will provide with answer
	- Have close button, that will hide the chat bot
	- provide answers to specified questions

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
