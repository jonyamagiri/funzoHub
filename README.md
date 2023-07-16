# funzoHub
funzoHub is an all-in-one learning platform that provides users with a wide range of online courses, seamless authentication, intuitive course search, and ability to save and track their learning progress.

## Table of Content
* [Technologies](#Technologies-used)
* [Installation](#Installation)
* [Usage](#Usage)
* [Api documentation](#Api-documentation)
* [Authors](#Authors)
* [Licence](#Licence)

## Technologies used
* Node.js
* Express
* bcrypt
* connect-flash
* cookie-parser
* dotenv
* ejs
* mongoDB

## Installation
- Clone the Project

``` 
https://github.com/jonyamagiri/funzoHub.git
```
- Install dependencies
```
npm install
```
## Usage
- Start the server

``` npm run dev - start the server at port:3000```

- Enter the address in a web browser

``` http://localhost:3000 - Open the starting page of the web app.```

## Api-documentation

### Authentication
To access the API endpoints, you need to include an Access token in the request headers. Obtain an access token by signing up on our website and generate one after you sign in.

### Endpoints
1. User Registration\
Endpoint: /api/users/register\
Method: POST\
Description: Registers a new user in the app.

2. User Login\
Endpoint: /api/users/login\
Method: POST\
Description: Authenticates a user and generates an access token.

3. Current user\
Endpoint: /api/users/current\
Method: GET\
Description: Gets the current user.

4. Courses\
Endpoint: /api/courses</:id>
Method: GET, POST, PUT, DELETE\
Description: Gets all the courses or individual course, post a new course, update and delete an existing course

5. Categories\
Endpoint: /api/categories</:id>
Method: GET, POST, PUT, DELETE\
Description: Gets all the categories or individual category, post a new category, update and delete an existing category

## Authors
Joab Ogembo - [Github](https://github.com/jonyamagiri)\
Chibuzo Nwakacha - [Github](https://github.com/Chybuzlopez)

## Licence
This API is released under the MIT License