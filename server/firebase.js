const admin = require('firebase-admin');
// const serviceAccount = require(''); //path to service json
const serviceAccount = {
    apiKey: "AIzaSyDp36G5oh-otAKLU_r_DuN8zDYp_WV1PFI",
    authDomain: "hephaestus-7ec3a.firebaseapp.com",
    projectId: "hephaestus-7ec3a",
    storageBucket: "hephaestus-7ec3a.appspot.com",
    messagingSenderId: "132893027702",
    appId: "1:132893027702:web:f2ef92e1f1cc20ec539e57"
  };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;