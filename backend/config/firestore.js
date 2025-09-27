var admin = require("firebase-admin");
var dotenv = require('dotenv');

dotenv.config();

var serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIAL

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// console.log(db);

module.exports = db;