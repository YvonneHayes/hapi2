# One Resource REST API built with Hapi and MongoDB
A project for CodeFellows 401 testing out an alternative to Express
## Installation
1. Install [Node.js](https://nodejs.org/en/).
2. Install [MongoDB](https://docs.mongodb.com/manual/installation/).
3. Install [Postman](https://www.getpostman.com).
4. Run `git clone https://github.com/YvonneHayes/hapi2.git`.
5. Install any dependencies/dev-dependencies according to your needs
6. Use Postman to make requests.

## API
Index page is at http://localhost:8080
### Books

Make all GET and POST requests to /books

GET, PUT, and DELETE requests can be made to /books/{id}

Request body needs to be JSON and formatted:
```
{"title": "Pride and Prejudice",
"author": Jane_Austen,
"done": true,
"rating": 7}
```


#### Get all books

```
GET /books
```

#### Get single book by a specific author

```
GET /books/:id
```

#### Create a book

Format:
```
{
  title: *string*,
  author: *string*,
  done: *boolean*,
  rating: *number*
 }  
 ```

 "done" refers to whether you have finished reading the book and takes a boolean as a value.

 * All fields are *required*



```
POST /books
```

#### Update a book

Format:
```
{
  title: *string*,
  author: *string*,
  done: *boolean*,
  rating: *number*
 }  
 ```

```
PUT /books/:id
PATCH /books/:id
```

#### Remove a book

```
DELETE /books/:id
```
