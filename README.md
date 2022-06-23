# Setup
In this section you will setup the application. Follow the steps below:

1. Create a new Mongo Database
2. Setup a new collection called `Users`
3. Create a `.env` file in server and change the values to the ones you require
4. Run the server and make sure you are connected to mongo by requesting the `/test-mongo` path by GET

### .env file:
```
PORT=8080
MONGO_CLIENT_URI="mongodb://admin:1234@localhost:27017"
DB="hi-jake"
JWT_KEY="hi-jake-secret"
```