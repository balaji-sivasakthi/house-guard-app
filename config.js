var admin = require("firebase-admin");

var serviceAccount = require("./houseguardapp-firebase-adminsdk-atfsf-007fd1ba95.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin