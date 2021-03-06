This project proposes a technical challenge.
Developing a client-server system, employing NodeJS, Express, MongoDB, Firebase
and Cloudinary for the back-end implementation, and ReactJS + Redux for the
front-end.

## Start 🚀

Get a clone of the project in local [client](https://github.com/joserra-15/assembler-tech-challenge-web) and [backend](https://github.com/joserra-15/assembler-tech-challenge-api). You need to have installed nodejs and yarn
in your computer to develop the proyect.

### Requirements 📋

_You need to install nodejs_

Go to [NodeJs web page](https://nodejs.org/es/) download and install the
program.

_Then you have to install yarn_

```
npm install --global yarn
```

_When you have installed this two programs you need to create acounts in:_

- Firebase
- MogoDB Atlas
- Cloudinary

### Instalation 🔧

_First clone the repositories_

```
https://github.com/joserra-15/assembler-tech-challenge-web.git
https://github.com/joserra-15/assembler-tech-challenge-api.git
```

_Then run yarn install in each clone_

```
yarn install
```

_When you have all the dependencies installed you need to create two .env files,
one in web repository, and the other in api repository_

_The web .env file need to contain the next variables:_

```
REACT_APP_API_BASE_URL= http://localhost:4000
REACT_APP_API_KEY = Your FireBase Api key
REACT_APP_AUTH_DOMAIN = Your FireBase auth domain
REACT_APP_PROJECT_ID = Your FireBase project id
REACT_APP_STORAGE_BUCKET = Your FireBase storage bucket
REACT_APP_MESSAGING_SENDER_ID = Your FireBase messaging sender id
REACT_APP_APP_ID = Your FireBase app id 
REACT_APP_CLOUDINARY_URL = Your Cloudinary img url
REACT_APP_CLOUDINARY_PRESET = A Cloudinary preset to upload images

```

_The api .env file need to contain the next variables:_

```
FB_CERT_TYPE= Your FireBase cert type
FB_CERT_PROJECT_ID= Your FireBase project id
FB_CERT_PRIVATE_KEY_ID= Your FireBase private key id
FB_CERT_PRIVATE_KEY= Your FireBase private key
FB_CERT_CLIENT_EMAIL= Your FireBase client email
FB_CERT_CLIENT_ID= Your FireBase client id
FB_CERT_AUTH_URI= Your FireBase Auth uri
FB_CERT_TOKEN_URI= Your FireBase token uri
FB_CERT_AUTH_PROVIDER_X_509_CERT_URL= Your FireBase cert auth provider x 509 cert url
FB_CERT_CLIENT_X_509_CERT_URL= Your FireBase cert client x 509 cert url
MONGO_DB_URL_PRODUCTION= Your MongoDB Atlas connection url for producction
MONGO_DB_URL_DEVELOPMENT= Your MongoDB Atlas connection url for development
MONGO_DB_URL_TEST= Your MongoDB Atlas connection url for test
```

## Build with 🛠️

- [NodeJS](https://nodejs.org/es/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [ReactJs](https://es.reactjs.org/)
- [Redux](https://es.redux.js.org/)
- [FireBase](https://firebase.google.com/)
- [Cloudinary](https://cloudinary.com/)

## Contributing 🖇️

If you want to contribute, please fork the repository, create a new branch whit
your contribution, and push the branch as a pull requests.

## Wiki 📖

- You can also check more info in [Documentation](./Documentation/Documentation.pdf) on PDF.


## Contributors ✨


With ❤:
- [Jose Serralvo Rojo](https://github.com/joserra-15)
