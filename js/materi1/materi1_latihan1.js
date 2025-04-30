import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, set, get, query, orderByKey, limitToLast, remove } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// Firebase configuration (same as firebase-set-kkm.js)
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

// Correct answers moved to global scope
const correctAnswers = {
  isian1: "46",
  isian2: "Y",
  isian3: "XX",
  isian4: "XY",
  isian5: "22AAXX",
  isian6: "22AAXYg",
  isian7: "22AX",
  isian8: "22AY",
  isian9: "22AX",
  isian10: "22AY",
};

// mengisi kotak kosong
async function cekJawaban() {
  let isian1 = document.querySelector("#isian1");
  let isian2 = document.querySelector("#isian2");
  let isian3 = document.querySelector("#isian3");
  let isian4 = document.querySelector("#isian4");
  let isian5 = document.querySelector("#isian5");
  let isian6 = document.querySelector("#isian6");
  let isian7 = document.querySelector("#isian7");
  let isian8 = document.querySelector("#isian8");
  let isian9 = document.querySelector("#isian9");
  let isian10 = document.querySelector("#isian10");

  // Collect answers
  const answers = {
    isian1: isian1.value.trim(),
    isian2: isian2.value.trim(),
    isian3: isian3.value.trim(),
    isian4: isian4.value.trim(),
    isian5: isian5.value.trim(),
    isian6: isian6.value.trim(),
    isian7: isian7.value.trim(),
    isian8: isian8.value.trim(),
    isian9: isian9.value.trim(),
    isian10: isian10.value.trim(),
  };

  // Check for empty answers
  for (const key in answers) {
    if (answers[key] === "") {
      swal({
        title: "Jawaban Kamu masih kosong",
        icon: "warning",
      });
      return; // stop further processing if any answer is empty
    }
  }

  // Score calculation
  let score = 0;
  for (const key in answers) {
    const inputElement = document.querySelector("#" + key);
    if (answers[key] === correctAnswers[key]) {
      inputElement.classList.add("boxHijau");
      score++;
    } else {
      inputElement.classList.add("boxMerah");
    }
  }

  // Save to Firebase
  try {
    const userId = localStorage.getItem('nisns') || "anonymous"; // Get current logged-in user's NISN or fallback
    const dbRef = ref(db, '/UserSiswa/19/latihan/latihan-1/' + userId);
    // Delete old saved answers
    const oldSnapshot = await get(query(dbRef, orderByKey()));
    if (oldSnapshot.exists()) {
      const keys = Object.keys(oldSnapshot.val());
      for (const key of keys) {
        await remove(ref(db, '/UserSiswa/19/latihan/latihan-1/' + userId + '/' + key));
      }
    }
    const timestamp = Date.now();
    await set(ref(db, '/UserSiswa/19/latihan/latihan-1/' + userId + '/' + timestamp), {
      answers: answers,
      score: score,
      timestamp: timestamp
    });
    // Update score description below
    const feedbackDiv = document.getElementById('feedback');
    if (feedbackDiv) {
      const percentage = ((score / 10) * 100).toFixed(0);
      feedbackDiv.innerHTML = `<b>Skor kamu: ${percentage} dari 100</b>`;
    }
    // Update score display div with current score
    const scoreDisplay = document.getElementById('scoreDisplay');
    if (scoreDisplay) {
      const percentage = ((score / 10) * 100).toFixed(0);
      scoreDisplay.textContent = `Skor: ${percentage} dari 100`;
    }
    swal({
      title: "Jawaban telah disimpan! Skor kamu: " + score + " dari 10",
      icon: "success",
    });
  } catch (error) {
    console.error("Error saving answers:", error);
    swal({
      title: "Gagal menyimpan jawaban ke database",
      icon: "error",
    });
  }
}

// Expose functions to global scope for HTML onclick handlers
async function cekUlang() {
  let isian1 = document.querySelector("#isian1");
  let isian2 = document.querySelector("#isian2");
  let isian3 = document.querySelector("#isian3");
  let isian4 = document.querySelector("#isian4");
  let isian5 = document.querySelector("#isian5");
  let isian6 = document.querySelector("#isian6");
  let isian7 = document.querySelector("#isian7");
  let isian8 = document.querySelector("#isian8");
  let isian9 = document.querySelector("#isian9");
  let isian10 = document.querySelector("#isian10");

  document.querySelector("#isian1").value = "";
  isian1.classList.remove("boxHijau");
  isian1.classList.remove("boxMerah");

  document.querySelector("#isian2").value = "";
  isian2.classList.remove("boxHijau");
  isian2.classList.remove("boxMerah");

  document.querySelector("#isian3").value = "";
  isian3.classList.remove("boxHijau");
  isian3.classList.remove("boxMerah");

  document.querySelector("#isian4").value = "";
  isian4.classList.remove("boxHijau");
  isian4.classList.remove("boxMerah");

  document.querySelector("#isian5").value = "";
  isian5.classList.remove("boxHijau");
  isian5.classList.remove("boxMerah");

  document.querySelector("#isian6").value = "";
  isian6.classList.remove("boxHijau");
  isian6.classList.remove("boxMerah");

  document.querySelector("#isian7").value = "";
  isian7.classList.remove("boxHijau");
  isian7.classList.remove("boxMerah");

  document.querySelector("#isian8").value = "";
  isian8.classList.remove("boxHijau");
  isian8.classList.remove("boxMerah");

  document.querySelector("#isian9").value = "";
  isian9.classList.remove("boxHijau");
  isian9.classList.remove("boxMerah");

  document.querySelector("#isian10").value = "";
  isian10.classList.remove("boxHijau");
  isian10.classList.remove("boxMerah");

  // Delete saved answers from Firebase
  try {
    const userId = localStorage.getItem('nisns') || "anonymous";
    const dbRef = ref(db, '/UserSiswa/19/latihan/latihan-1/' + userId);
    const latestQuery = query(dbRef, orderByKey(), limitToLast(1));
    const snapshot = await get(latestQuery);
    if (snapshot.exists()) {
      const keys = Object.keys(snapshot.val());
      for (const key of keys) {
        await remove(ref(db, '/UserSiswa/19/latihan/latihan-1/' + userId + '/' + key));
      }
    }
  } catch (error) {
    console.error("Error deleting saved answers:", error);
  }
  swal({
    title: "Jawaban berhasil dihapus!",
    icon: "success",
  });
}

// Load saved answers for latihan 1 and populate inputs
async function loadSavedAnswers() {
  const userId = localStorage.getItem('nisns') || "anonymous";
  const dbRef = ref(db, '/UserSiswa/19/latihan/latihan-1/' + userId);
  const latestQuery = query(dbRef, orderByKey(), limitToLast(1));
  try {
    const snapshot = await get(latestQuery);
    if (snapshot.exists()) {
      const data = Object.values(snapshot.val())[0];
      if (data && data.answers) {
        for (const key in data.answers) {
          const input = document.querySelector('#' + key);
          if (input) {
            input.value = data.answers[key];
            // Optionally add green/red box based on correctness
            if (data.answers[key] === correctAnswers[key]) {
              input.classList.add("boxHijau");
              input.classList.remove("boxMerah");
            } else {
              input.classList.add("boxMerah");
              input.classList.remove("boxHijau");
            }
          }
        }
        // Update score display div with stored score
        const scoreDisplay = document.getElementById('scoreDisplay');
        if (scoreDisplay && typeof data.score === 'number') {
          const percentage = ((data.score / 10) * 100).toFixed(0);
          scoreDisplay.textContent = `Skor: ${percentage} dari 100`;
        }
      }
    }
  } catch (error) {
    console.error("Error loading saved answers:", error);
  }
}

window.cekJawaban = cekJawaban;
window.cekUlang = cekUlang;
window.loadSavedAnswers = loadSavedAnswers;

// Call loadSavedAnswers on page load
window.addEventListener('DOMContentLoaded', () => {
  loadSavedAnswers();
});
 
 