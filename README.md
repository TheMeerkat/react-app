# react-app - Balance By Card Number

This application contains the supporting API, data, and APP for retrieving balances by a users card number.

## System Requirements

This application uses the following applications and their versions:

nodejs v17.2.0
npm v8.1.4

Additionally, currently this app is supported on at minimum the following browsers:

chrome v96.x

## Setting up and Starting the API

The API runs on nodejs, there is a single configurable property to set the port
the API is served on.  You can set this property via system environment variables, or when running the command to start.

Default port 8080

To start the API you can run the following command from the api directory:

`npm run start`

## Setting up and Starting the APP

Before any steps are taken you need to configure the environment variables for the application.  You can do this by copying the `.env.example` file `.env` and
setting the appropriate values for your environment.

Prior to starting or building the application you should have the API running first to appropriately set the host which should look something like:

`http://127.0.0.1:8080/api/`

The application itself can be served locally on nodejs or built and hosted on a webserver.

To run locally on nodejs you can run:

`npm run start`

To host the application on a web server you can run:

`npm run build`

Once the application is built you can find it in the `app/build` directory.  You should be able to deploy this to a web server.

## Additional Notes

Nodejs v17.x was causing issues when attempting to start or build the web application.  These commands run through `npm run <command>` have the following option set `--openssl-legacy-provider` which is not ideal but was temporary to 
get things running as fast as possible.


