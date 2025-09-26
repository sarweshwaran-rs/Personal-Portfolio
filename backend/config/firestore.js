var admin = require("firebase-admin");

var serviceAccount = require("../portfolio-091003-service-account.json");

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// console.log(db);

module.exports = db;