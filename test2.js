const firebase = require("firebase");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCHlnZp_URs2cEDOnOhBkDsp1v_dvruQOc",
  authDomain: "altitudelogger.firebaseapp.com",
  projectId: "altitudelogger",
  storageBucket: "altitudelogger.appspot.com",
  messagingSenderId: "90497077875",
  appId: "1:90497077875:web:d3010b2b82cb76ce7f9006"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to Firestore
const db = firebase.firestore();
