# firebase-9-skeleton

# Setting up the environment

Add a .env file and paste your firebase config object. The required enviroment variables are mentioned below

```
  FIREBASE_API_KEY
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGEING_SENDING_ID,
  FIREBASE_APP_ID,
```

## Import config/index.js in your main JS file where the application starts up.

# USAGE

To use authentication services, import the auth file
To use firestore services, import the firestore file
To use cloud storage services, import the storage file

# Usage for not provided modules

### To use the features not added in above files

Require the db/storage/auth objects from the config/index file and pass them as the first parameter in whatever service you want to use.
