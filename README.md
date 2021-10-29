# reactjs-nodejs-chat-app
Chat application developed using MongoDB, Express.js, React.js and Node.js.

# 🚀 Author
-👋 Hi, I’m Marvin Nguyễn. I'm living in VietNam.
-👀 I’m interested in NodeJS, ReactJS, PHP, C#, TypeScript,MongoDB.
-🌱 I’m currently learning AI, Blockchain, NodeJS, ReactJS, TypeScript, MongoDB
-💞️ I’m looking to collaborate on AI, Blockchain, NodeJS, ReactJS, TypeScript, MongoDB. I'm also building an outsourcing startup company about AI, Blockchain,NodeJS, ReactJS,TypeScript.
-📫 How to reach me?
    - https://github.com/at-maonv
-👋 Contact me.
    - Skype: bestlife2912
    - Email: nguyenmao.2912@gmail.com
-💞️ Thank you!

# React Chat App
Chat application developed using MongoDB, Express.js, React.js and Node.js.

## Getting started
### Pre-requisites
Before starting to work on this project, you must have Node.js installed on your machine.

### ⚠️ Quick start
``` 
# Install dependencies on the server side
npm install

# Install dependencies on the client side
npm client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

```

## TDD-Test Driven Development
 - npx express-generator --no-view api-tdd
 - npm install
 - npm install -D jest supertest
 - npm install chai
 - npm install mocha
 - npm install chai-http
 - In package.json: 
    - Update:
        "scripts": {
            "start": "node ./bin/www",
            "test": "jest --watchAll",
        }
 - npm test

***Notes:*** 
* *Add your MongoDB connection strings in dbKeys.js (inside the `config` folder).*
    ```
    if(process.env.NODE_ENV === 'production') {
        module.exports = { mongoURI: '' }; // Add your remote db connection string here
    } else {
        module.exports = { mongoURI: '' }; // Add your local db connection string here
    }
    ```
* *Add your session secret key in `sessionConfig.js` (inside the `config` folder).*
    ```
    module.exports = {
        secret: ''
    }
    ```
* *Port for the client: 3000. Port for the server and the proxy: 5000. If you have to change the port for the server or the proxy, remember to change both!*