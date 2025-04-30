const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set } = require("firebase/database");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADUmOEWb7NE5pWV-BwHfAt7pF-IV3PP2U",
  authDomain: "heredity-86b90.firebaseapp.com",
  databaseURL: "https://heredity-86b90-default-rtdb.firebaseio.com",
  projectId: "heredity-86b90",
  storageBucket: "heredity-86b90.appspot.com",
  messagingSenderId: "61653132520",
  appId: "1:61653132520:web:106995cc62a7be388a955d",
  measurementId: "G-P991YR1DP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

async function setKKM() {
  try {
    await set(ref(db, 'kkm/evaluasi'), { kkm: 75 });
    await set(ref(db, 'kkm/kuis1'), { kkm: 75 });
    console.log("KKM values set successfully.");
  } catch (error) {
    console.error("Error setting KKM values:", error);
  }
}

setKKM();
