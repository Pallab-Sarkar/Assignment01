# Furation-Assignment



## Getting started

```
git clone https://github.com/pallab12/Furation_Assignment.git

```

## How to run in local server?

Follow below steps-
(Make sure you have updated node & mongodb installed in your pc)
then,

```
npm install
npm run dev

```
create .env file,
add below keys into .env file-
- DB_URL= mongodb://0.0.0.0:27017/assignment
- PORT= 8000
- NODE_ENV= development
- API_SECRET= efghij

## How can you test in POSTMAN?
I have pushed postman collection in this repository.
you have to import it in the postman, you'll find the import option in top-left corner in Postman
Strictly follow the below steps to test the apis,

- First, you have to create user using this api, POST "BASEURL/api/auth/register"
- Then, verify user using this api, POST "BASEURL/api/auth/verify-otp"
- Then, Get authorize token, POST "BASEURL/api/auth/login"
- Then, Create item, POST "BASEURL/api/items/create"
- For retrieve all items, POST "BASEURL/api/items/" (Remember you can fetch through giving valid conditions, pagination & searchTerm)
- For retrieve single item, GET "BASEURL/api/items/ID"
- For Update item, PUT "BASEURL/api/items/ID"
- For delete item, DELETE "BASEURL/api/items/ID"
- (BASEURL = your localhost url)
- (ID = Item id)


## Technology used

- Express.js
- Mongoose
- Json web token
- Winston
- Nodemailer
- And, various other packages i have used in this project.

## What things have I implemented?

I have implemented everything that you mentioned in your email, including options.
The only thing I have intentionally skipped is unit test cases. Because I didn't get enough time to write test cases. Sorry for that.

