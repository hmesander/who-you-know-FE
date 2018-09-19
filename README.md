# Who You Know

## Application Description
* Tech Stack: React frontend and Rails API backend.

* Application Purpose: Allows a user to better learn the connections in their LinkedIn network.  

* How It Works: After authenticating with LinkedIn OAuth, the user's connections are retrieved from LinkedIn. The user must first sort each connection into 3 categories(easy, medium, hard) based on how well they can identify the connection from  profile photo.  The user can then play a set of connections to practice identifying connections from their LinkedIn profile photos. Scores for each play and information about incorrect answers are recorded and displayed to the user when the play is completed.  Historical score information for each difficulty level is also available to the user.

## Screen Shots


## Initial Setup

1. Clone the repository

 ```shell
 git clone git@github.com:tdberg21/who-you-know-FE.git
 ```
2. Navigate to the `who-you-know-FE` directory

 ```shell
 cd who-you-know-FE
 ```

3. Install the dependencies

 ```shell
 npm install
 ```

4. Run test suite

 ```shell
 npm test
 ```
<hr>

## Running the Server Locally

To see your code in action locally, you need to fire up a development server. Use the command:

 ```shell
 npm start
 ```

Once the server is running, visit the app in your browser:

* `http://localhost:3000/` to run your application.

<hr>

## Deployments
* Front end is deployed here with Heroku: https://who-you-know-fe.herokuapp.com/

* [Rails Backend API](https://github.com/justinetroyke/who-you-know-backend) is deployed with Heroku here: https://who-you-know.herokuapp.com/
