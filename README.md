## T4SG Fall 2023 Workshop

#### Setup

###### Node

1. Ensure that you have Node installed on your computer. Run the command node --version to see if it is installed.
2. If Node is not installed, you can install it [here](https://nodejs.org/en/download).

###### MongoDB
1. Clone the repository onto your local machine.
2. Create a MongoDB Atlas account [here](https://www.mongodb.com/cloud/atlas/register).
3. Go to the inbox of the email you signed up with and look for an email to verify your account.
4. Once your account is verified, you will be redirected to a page and answer a few questions (your answers to these questions are not imporant).
5. From there, you will be asked to select a plan for your database. Selet **_M0 (Free)_** and click Create.
6. Completing 5 will bring you to Security QuickStart, where you'll set up credentials to access your database. Create a new user (make sure to save the username and password somewhere).
7. MongoDB will place your default IP Address on the access list. Click **_Finish and Close_**.
8. Your database will take a couple minutes to create. Once it's finish, navigate to the Database Section on Atlas and click Connect on Cluster0. Then click Drivers. Under section 3 (Add your connection string to application code), copy the URI shown.
9. In this repository, navigate to the .env.example file in /backend. Rename the file to .env and then set `MONGO_URI=mongodb+srv://<username>:<password>@cluster0.bwltaes.mongodb.net/?retryWrites=true&w=majority` with the appropriate username and password (that you created for the user in step 6).

##### Download Postman (optional)
We'll be testing our API with a platform called ***Postman***. Download the 
***desktop verson*** [here](https://www.postman.com/downloads/). 

###### Running the App 
1. After performing the steps above, `cd` into the /backend directory and run `npm install` or `npm i` 
2. To start the application, run `npm run dev`. 
######

#### Exercise 
In the workshop, we will create a simple REST API with Node.js Express for managing information 
about different T4SG teams and members. 

In \models, you should see two files that define schemas for a ***Member*** and ***Team*** 
collection. These schemas are defined using mongoose, which is a JavaScript object-oriented 
library that creates a connection between our Node.js app and our MongoDB database. With this 
library we can define schemas, validation rules, and also perform CRUD processes on our database. 

Overall, we'll define the endpoints of our API in views. We'll create the following endpoints: 
1. `/create-team`: adds a new team to the database. 
2. `/get-teams`:  retrieves all the teams in the database
3. `/edit-team/:id`: edits the team with objectID `id` with a given payload
4. `/delete-team/:id`:  removes the team with objectID `id` 
5. `/add-member`: adds a T4SG member 
6. `/get-members`: gets all T4SG members 
7. `/edit-member/:id`: edits the information of member with objectID `id` 
8. `/delete-member/:id`: removes member with objectID `id` from database 

