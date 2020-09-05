# Rotfucks CMS Backend
This is the Rotfuks CMS Backend that persists and delivers the Rotfuks Pages. 

#### Prerequisites
In order for the application to run correctly you need to run the Mongo DB Database in [the infra module](../infra/README.md)

Additionally you have to set the correct MongoDB Connection String in [the environment file.](.env)

At last you have to download the dependencies with 
```
npm install
```
#### Setup Dataset
When starting the RotfuksCMS for a new RotfuksPagesInstance you first need to define the PAGES_ID within the .env-file.
Additionally you have to set up the Datasets for it. 

These fields are needed: 
```
PAGES_ID: <PAGES_ID>
CMS_DB_URI: <URI of the MongoDB>
SECRET: <Secret used for Auth>
```
in a newly created object of the following collections:
```
navbars
generalInfos
```

#### Start the application
This Application runs with nodemon, just start 
```
$ npm start
```

In order to explore the API GraphQL Playground is hosted at [localhost:4000.](http://localhost:4000)

If you want to run the Application in **Production** set the env-variable `NODE_ENV=production` and run the app with 
```
$ npm prod
```

#### Docker Container
You can also build and run the application within the Docker container with 
```
$ docker build -t rotfukscms/backend . 
$ docker run -p <OUT_PORT>:4000 -d rotfukscms/backend 
```
Keep in mind that you have to add the environment variables. 
You can do this by adding the `--env` parameter into the `docker run`-command, 
or read in the env-file with the parameter `--env-file`. 