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
id: <PAGES_ID>
pagesId: <PAGES_ID>
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
