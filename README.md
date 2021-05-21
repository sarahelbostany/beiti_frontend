# Beiti

# Overview:

* Beiti is an app that allows users to create boards for idea they have for their home. They can save inspo picstures of room they would like to replicate, DIY projects they had do, etc. The user can come back to specific boards when they are ready to start re-doing their home!

# User Stories
* When I go to the App, I see a login and signup button
* When I click on the login button, I can enter email and password to sign-in.
* When I click on the signup buttton, I am prompted to enter my name, email and password.
* When I am logged in, a page will appear with all boards a user has created
* There will be a search engine to search for ideas
* When a user clicks on a photo they can save to a specifc board

# MVP:
* Login, signup and logout?
* Allow user to create boards?
* Add, edit, delete and save any photos?

# Routes:
### User
| Method | Path                   | Description                  |
|--------|------------------------|-----------------------------|
| GET    | /users/:id             | Get user profile info       |
 POST   | /users/login          | Log-in page                      |
| POST   | /users                 | Sign-up page                 |
| DELETE    | /users/:id             |  Delete user       |



### Board
| Method | Path                   | Purpose                         |
|--------|------------------------|---------------------------------|
| GET    | /board        | User can get all boards     |
| POST   | /board      | User can add post inspo to board         |
| POST   | /board/:id      | User can add post inspo to board         |
| DELETE | /board/:id     | User can delete expense input    |


# Wireframes:

# Databse Diagrams:


# Frontend Component Diagram:

# Technologies:
* Express
* React.js
* Sequelize

# Stretch Goals

# Timeline
### 5/21
* Complete both frontend and backend setup
* Finish the login, logout, signup and get navbars setup
* Start on routes

### 5/22 - 5/23
* Complete all routes
* Start getting the boards to show up

### 5/24
* Work on the switch between nav links
* Allow users to search for ideas


### 5/25
* Work on frontend
* Allow users to save images to a specific board

### 5/26
* Deployment jam
* Make sure everything is working

### 5/27
* Work on UI
* Fix any bugs

### 5/28
* Any last minute fixes or adds (possibly stretch goals)




# Repo Link
* https://github.com/sarahelbostany/beiti_frontend
