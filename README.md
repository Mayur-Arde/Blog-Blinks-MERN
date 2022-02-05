# Blog-Blinks-MERN:

### Demo video [Link](https://drive.google.com/file/d/11MAC0AfwnfO48sWC_lrwqbI1CnMKMHa2/view?usp=sharing)

## Getting Started

These instructions to run on your local machine for development and testing purposes.

##  Prerequisites

_Node.JS and npm or yarn must be installed. 

##  Installing

Follow these steps to run this project in your local computer.
To start client(frontend)

```
$ cd client
$ npm install
$ npm npm start
```
To start server(backend)

```
$ cd server
$ npm install
$ npm npm start
```

Now, both the server and client will run on port  `5000`  and  `3000`  respectively

## Introduction
This is a MERN Web App named Blog-Blink where user can register and post their Blogs with title and text which will be visible to all the users of the app. The users can view single blog post. The user who creates the blog post can or edit delete  it anytime.

## Technology

The main technologies used to build this application are:

-   React.js 
-   Node.js 
-   MongoDB 
-   Express.js 
-   Plain CSS

## Features

A blog app with the following features.

Unlogged in users can do the following:

-   View all posts.
-   View one post's content by clicking on it.
-   Signup.

In addition to the above points, logged in users can do the following:

-   Login or logout.
-   Create a new post.
-   View/Edit/delete their posts.

## Architecture Diagram/Flowchart
![Architecture Diagram/Flowchart](https://res.cloudinary.com/drrqslttj/image/upload/v1643995654/blog%20readme/1_mxt7qm.png)
## Database

All the models can be found in the models directory created using mongoose.

### User Schema:

-   username (String)
-   email (String)
-   password (String)


### Post Schema:

-   title (String)
-   desc (String)
-   username (String)

## DB Architecture Diagram/Flowchart

![DB Architecture Diagram/Flowchart](https://res.cloudinary.com/drrqslttj/image/upload/v1643997184/blog%20readme/database-flowchart_yk71ou.png)
