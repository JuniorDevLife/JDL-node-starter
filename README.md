<p align="center">
   <img width="350" src="./assets_repo/animatedSVG.svg"/>
</P>

[![JuniorDEV.life](https://img.shields.io/badge/AfterAcademy-opensource-blue.svg)](https://juniorDEV.life) [![Build Status](https://travis-ci.org/afteracademy/nodejs-backend-architecture-typescript.svg?branch=master)](https://travis-ci.org/afteracademy/nodejs-backend-architecture-typescript)

## About this Open Source Project
This open-source project is for you(community). Our Team at [JuniorDEV.life](https://juniordev.kufe) has taken this initiative to promote Backend Learning in the best possible way. We are determined to provide quality content for everyone. Let's do it together by learning from this project.
<br>

The main focus will be to create a maintainable and highly testable architecture.
* **Separation of concern principle is applied**: Each component has been given a particular role. The role of the components is mutually exclusive. This makes the project easy to be unit tested.
* **Feature encapsulation is adopted**: The files or components that are related to a particular feature have been grouped unless those components are required in multiple features. This enhances the ability to share code across projects.
* **Centralised Error handling is done**: We have created a framework where all the errors are handled centrally. This reduces the ambiguity in the development when the project grows larger.
* **Centralised Response handling is done**: Similar to Error handling we have a response handling framework. This makes it very convenient to apply a common API response pattern.
* **Mongodb is used through Mongoose**: Mongodb fits very well to the node.js application. Being NoSQL, fast, and scalable makes it ideal for modern web applications.
* **Async execution is adopted**: We have used async/await for the promises and made sure to use the non-blocking version of all the functions with few exceptions.
* **Docker compose has been configured**: We have created the Dockerfile to provide the easy deployability without any setup and configurations. 
* **Unit test is favored**: The tests have been written to test the functions and routes without the need of the database server. Integration tests has also been done but the unit test is favored.
* **A pure backend project**: We have experienced that when a backend is developed clubbed with a frontend then in the future it becomes really difficult to scale. We would want to create a separate backend project that servers many websites and mobile apps.

> In the above repository [**React.js Isomorphic Web Application Architecture**] we will learn and build a React web application for a blogging platform using this project as its API server. [Visit demo website](https://demo.react-app-architecture.afteracademy.com)

### 3RE Architecture: Router, RouteHandler, ResponseHandler, ErrorHandler
<p align="center">
    <img src="https://raw.githubusercontent.com/afteracademy/nodejs-backend-architecture-typescript/master/addons/github_assets/3RE.png">
</p>
<br>

### Request-Response Handling Schematic Diagram
<p align="center">
    <img src="https://raw.githubusercontent.com/afteracademy/nodejs-backend-architecture-typescript/master/addons/github_assets/api-structure.png">
</p>
<br>

### How to build and run this project
 * Run The Tests
    * Install node.js and npm on your local machine.
    * From the root of the project executes in terminal `npm install`.
    * *Use the latest version of node on the local machine if the build fails*.
    * To run the tests execute `npm test`.
 * Install Without Docker [**2nd Method**]
    * Install MongoDB on your local.
    * Do steps 1 to 3 as listed for **Run The Tests**.
    * Execute `npm start` and You will be able to access the API from http://localhost:3000
    * To run the tests execute `npm test`.
  
 ## Project Directory Structure
 ```
├── src
│   ├── server.ts
│   ├── app.ts
│   ├── config.ts
│   ├── auth
│   │   ├── apikey.ts
│   │   ├── authUtils.ts
│   │   ├── authentication.ts
│   │   ├── authorization.ts
│   │   └── schema.ts
│   ├── core
│   │   ├── ApiError.ts
│   │   ├── ApiResponse.ts
│   │   ├── JWT.ts
│   │   └── Logger.ts
│   ├── database
│   │   ├── index.ts
│   │   ├── model
│   │   │   ├── ApiKey.ts
│   │   │   ├── Blog.ts
│   │   │   ├── Keystore.ts
│   │   │   ├── Role.ts
│   │   │   └── User.ts
│   │   └── repository
│   │       ├── ApiKeyRepo.ts
│   │       ├── BlogRepo.ts
│   │       ├── KeystoreRepo.ts
│   │       ├── RoleRepo.ts
│   │       └── UserRepo.ts
│   ├── helpers
│   │   ├── asyncHandler.ts
│   │   ├── role.ts
│   │   └── validator.ts
│   ├── routes
│   │   └── v1
│   │       ├── access
│   │       │   ├── login.ts
│   │       │   ├── logout.ts
│   │       │   ├── schema.ts
│   │       │   ├── signup.ts
│   │       │   └── token.ts
│   │       ├── blog
│   │       │   ├── blogDetail.ts
│   │       │   ├── blogList.ts
│   │       │   ├── editor.ts
│   │       │   ├── schema.ts
│   │       │   └── writer.ts
│   │       ├── index.ts
│   │       └── profile
│   │           ├── schema.ts
│   │           └── user.ts
│   └── types
│       └── app-request.d.ts
├── tests
│   ├── auth
│   │   ├── apikey
│   │   │   ├── mock.ts
│   │   │   └── unit.test.ts
│   │   ├── authUtils
│   │   │   ├── mock.ts
│   │   │   └── unit.test.ts
│   │   ├── authentication
│   │   │   ├── mock.ts
│   │   │   └── unit.test.ts
│   │   └── authorization
│   │       ├── mock.ts
│   │       └── unit.test.ts
│   ├── core
│   │   └── jwt
│   │       ├── mock.ts
│   │       └── unit.test.ts
│   ├── routes
│   │   └── v1
│   │       ├── blog
│   │       │   ├── blogDetail
│   │       │   │   ├── mock.ts
│   │       │   │   └── unit.test.ts
│   │       │   └── writer
│   │       │       ├── mock.ts
│   │       │       └── unit.test.ts
│   │       ├── login
│   │       │   ├── integration.test.ts
│   │       │   ├── mock.ts
│   │       │   └── unit.test.ts
│   │       └── signup
│   │           ├── mock.ts
│   │           └── unit.test.ts
│   ├── .env.test
│   └── setup.ts
├── addons
│   └── init-mongo.js
├── keys
│   ├── private.pem
│   └── public.pem
├── .env
├── .gitignore
├── .dockerignore
├── .eslintrc
├── .eslintignore
├── .prettierrc
├── .prettierignore
├── .travis.yml
├── .vscode
│   └── launch.json
├── Dockerfile
├── docker-compose.yml
├── package-lock.json
├── package.json
├── jest.config.js
└── tsconfig.json
 ```

### Find this project useful ? :heart:
* Support it by clicking the :star: button on the upper right of this page. :v:
     
 
