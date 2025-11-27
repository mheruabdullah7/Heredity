// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

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
const db = getDatabase();

// The JSON data for the questions
const questionsData = {
  "1": {
    "pertanyaan": "Hukum Mendel I disebut juga sebagai…",
    "opsi": {
      "a": "Hukum Persegregasian",
      "b": "Hukum Pengelompokan Gen",
      "c": "Hukum Perbandingan Tetap",
      "d": "Hukum Distribusi Bebas"
    },
    "jawaban": "a"
  },
  "2": {
    "pertanyaan": "Bunyi Hukum Mendel I adalah…",
    "opsi": {
      "a": "Alel-alel yang berpasangan akan berpisah secara bebas saat pembentukan gamet",
      "b": "Alel-alel akan berpisah secara tidak teratur pada gamet",
      "c": "Alel dominan selalu mencegah alel resesif terbentuk dalam gamet",
      "d": "Setiap sifat diturunkan tanpa melalui gamet"
    },
    "jawaban": "a"
  },
  "3": {
    "pertanyaan": "Hukum Mendel II berbunyi bahwa…",
    "opsi": {
      "a": "Setiap pasangan alel memisah secara acak",
      "b": "Pasangan alel dari sifat berbeda akan berpisah secara bebas (independent assortment)",
      "c": "Gamet hanya membawa alel dominan",
      "d": "Sifat dominan selalu menang atas sifat resesif"
    },
    "jawaban": "b"
  },
  "4": {
    "pertanyaan": "Persilangan monohibrid adalah persilangan yang memperhatikan…",
    "opsi": {
      "a": "Dua sifat beda",
      "b": "Satu sifat beda",
      "c": "Tiga sifat beda",
      "d": "Empat sifat beda"
    },
    "jawaban": "b"
  },
  "5": {
    "pertanyaan": "Pada persilangan Tt × Tt (T = tinggi, t = pendek), rasio genotipe F2 adalah…",
    "opsi": {
      "a": "3 TT : 1 tt",
      "b": "1 TT : 2 Tt : 1 tt",
      "c": "1 TT : 1 Tt : 2 tt",
      "d": "2 TT : 1 Tt : 1 tt"
    },
    "jawaban": "b"
  },
  "6": {
    "pertanyaan": "Rasio fenotipe F2 pada persilangan monohibrid dengan dominansi sempurna adalah…",
    "opsi": {
      "a": "1 : 1",
      "b": "2 : 1",
      "c": "3 : 1",
      "d": "4 : 1"
    },
    "jawaban": "c"
  },
  "7": {
    "pertanyaan": "Persilangan dihibird adalah persilangan yang memperhatikan…",
    "opsi": {
      "a": "Satu sifat",
      "b": "Dua sifat",
      "c": "Tiga sifat",
      "d": "Empat sifat"
    },
    "jawaban": "b"
  },
  "8": {
    "pertanyaan": "Rasio fenotipe F2 persilangan RrYy × RrYy adalah…",
    "opsi": {
      "a": "1 : 1",
      "b": "3 : 1",
      "c": "9 : 3 : 3 : 1",
      "d": "1 : 2 : 1"
    },
    "jawaban": "c"
  },
  "9": {
    "pertanyaan": "Dalam persilangan dihibird, Hukum Mendel II menyatakan bahwa…",
    "opsi": {
      "a": "Pemisahan alel dari sifat berbeda terjadi secara bebas",
      "b": "Alel dominan selalu muncul",
      "c": "Gamet membawa dua alel sekaligus",
      "d": "Semua fenotipe pasti seragam"
    },
    "jawaban": "a"
  },
  "10": {
    "pertanyaan": "Jika dilakukan persilangan AaBb × aabb, maka perbandingan fenotipe keturunannya adalah…",
    "opsi": {
      "a": "1 dominan semua : 1 resesif semua",
      "b": "1 dominan sebagian : 3 resesif",
      "c": "1 : 1 : 1 : 1",
      "d": "3 dominan : 1 resesif"
    },
    "jawaban": "c"
  }
};

// Function to update the questions in Firebase
async function updateQuestions() {
  try {
    for (const [key, question] of Object.entries(questionsData)) {
      const questionRef = ref(db, `Soal/Soal_Kuis_1/Soal_Kuis_1_${key}`);
      await set(questionRef, {
        "teks-soal": question.pertanyaan,
        "a": question.opsi.a,
        "b": question.opsi.b,
        "c": question.opsi.c,
        "d": question.opsi.d,
        "kuncijwb": question.jawaban,
        "gambar": "", // No image
        "tmpl_img": "d-none" // Hide image template
      });
    }
    console.log("All questions updated successfully!");
  } catch (error) {
    console.error("Error updating questions:", error);
  }
}

// Call the update function
updateQuestions();
