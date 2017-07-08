// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDw5qPzxJ5-2QxM9np8Q18AAmW8Qgq-7UE',
    authDomain: 'orsa-app.firebaseapp.com',
    databaseURL: 'https://orsa-app.firebaseio.com',
    projectId: 'orsa-app',
    storageBucket: '',
    messagingSenderId: '554429806658'
  }
};
