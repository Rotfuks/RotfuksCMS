# Rotfucks Authentication Service
This is the authentication service for the Rotfuks CMS. This Service provides the Tokens to authenticate the user.

#### Prerequisites
In order for the application to run correctly you need to run the Mongo DB Database in [the infra module](../infra/README.md)

Additionally you have to set the correct MongoDB Connection String in [the environment file.](.env)

There you also have to add the **Secret** used to hash the Tokens.

At last you have to download the dependencies with 
```
npm install
```
#### Setup Dataset
In the Database you connect to you have to setup the Users that can get tokens for authentication.

Users are expected with the following fields: 
```
name: <User_Name>
password: <BCrypt hashed password>
email: <Email_Adress>
```

#### Start the application
This Application runs with nodemon, just start 
```
$ npm start
```

If you are running the application in 

In order to explore the API GraphQL Playground is hosted at [localhost:4000.](http://localhost:4000)

If you want to run the Application in **Production** set the env-variable `NODE_ENV=production` and run the app with 
```
$ npm prod
```

#### Get an Auth token
After setting up your users manually, they can just send an request with their name/password as json against `/api/auth/login` and they'll get a JWT Access-Token with 3h of fun.

#### Docker Container
You can also build and run the application within the Docker container with 
```
$ docker build -t rotfukscms/authenticate . 
$ docker run -p <OUT_PORT>:8080 -d rotfukscms/authenticate 
```
Keep in mind that you have to add the environment variables. 
You can do this by adding the `--env` parameter into the `docker run`-command, 
or read in the env-file with the parameter `--env-file`. 
