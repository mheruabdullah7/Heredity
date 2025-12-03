// Import the functions you need from the SDKs you need
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
const db = getDatabase();

// The JSON data for the questions
const rawData = {
  "soal": [
    {
      "id": 1,
      "tipe": "definisi",
      "pertanyaan": "Penyimpangan semu Hukum Mendel adalah…",
      "pilihan": {
        "a": "Penyimpangan yang terjadi karena mutasi gen",
        "b": "Penyimpangan pola fenotipe F2 akibat interaksi antargen",
        "c": "Penyimpangan karena kromosom gagal berpisah",
        "d": "Penyimpangan karena gen berubah posisi"
      },
      "jawaban": "b"
    },
    {
      "id": 2,
      "tipe": "persilangan",
      "pertanyaan": "Gen A bersifat epistatik dominan terhadap gen B. Persilangan AaBb × AaBb menghasilkan rasio fenotipe F2…",
      "pilihan": {
        "a": "9:3:3:1",
        "b": "12:3:1",
        "c": "9:7",
        "d": "15:1"
      },
      "jawaban": "b"
    },
    {
      "id": 3,
      "tipe": "definisi",
      "pertanyaan": "Kriptomeri adalah peristiwa ketika…",
      "pilihan": {
        "a": "Gen resesif menutupi gen dominan",
        "b": "Gen dominan tidak dapat mengekspresikan sifat tanpa gen pendamping",
        "c": "Dua gen harus hadir bersama untuk hasilkan sifat",
        "d": "Dua gen berbeda menutupi satu sama lain"
      },
      "jawaban": "b"
    },
    {
      "id": 4,
      "tipe": "persilangan",
      "pertanyaan": "Gen A dan B komplementer. Fenotipe normal hanya muncul jika A–B–. Persilangan AaBb × AaBb menghasilkan fenotipe normal sebanyak…",
      "pilihan": {
        "a": "7/16",
        "b": "9/16",
        "c": "3/16",
        "d": "1/16"
      },
      "jawaban": "b"
    },
    {
      "id": 5,
      "tipe": "definisi",
      "pertanyaan": "Epistasis adalah interaksi ketika…",
      "pilihan": {
        "a": "Alel dominan dan resesif muncul bersamaan",
        "b": "Satu gen menutupi ekspresi gen lain",
        "c": "Dua gen saling membantu mengekspresikan sifat",
        "d": "Banyak gen memberi efek aditif"
      },
      "jawaban": "b"
    },
    {
      "id": 6,
      "tipe": "persilangan",
      "pertanyaan": "Warna bunga ungu muncul jika terdapat A dan B. Genotipe A–bb dan aaB– berwarna putih. Persilangan AaBb × Aabb menghasilkan keturunan berwarna ungu sebanyak…",
      "pilihan": {
        "a": "1/4",
        "b": "3/8",
        "c": "1/2",
        "d": "5/8"
      },
      "jawaban": "b"
    },
    {
      "id": 7,
      "tipe": "definisi",
      "pertanyaan": "Polimeri adalah pola pewarisan sifat ketika…",
      "pilihan": {
        "a": "Satu alel menghambat alel lain",
        "b": "Dua gen muncul bersama untuk sifat tertentu",
        "c": "Banyak gen memberi pengaruh kecil yang bersifat aditif",
        "d": "Gen resesif memunculkan sifat baru"
      },
      "jawaban": "c"
    },
    {
      "id": 8,
      "tipe": "persilangan",
      "pertanyaan": "Tinggi tanaman dipengaruhi dua gen polimeri A dan B. Semakin banyak alel dominan → semakin tinggi. Persilangan AaBb × AaBb menghasilkan keturunan dengan genotipe AABB sebanyak…",
      "pilihan": {
        "a": "1/16",
        "b": "2/16",
        "c": "3/16",
        "d": "4/16"
      },
      "jawaban": "a"
    },
    {
      "id": 9,
      "tipe": "definisi",
      "pertanyaan": "Atavisme adalah munculnya kembali sifat…",
      "pilihan": {
        "a": "Baru akibat rekombinasi",
        "b": "Yang ada pada nenek moyang tetapi tidak muncul di generasi sebelumnya",
        "c": "Yang dipengaruhi gen resesif ganda",
        "d": "Yang timbul dari mutasi spontan"
      },
      "jawaban": "b"
    },
    {
      "id": 10,
      "tipe": "persilangan",
      "pertanyaan": "Gen aa bersifat epistatik resesif terhadap gen B. Persilangan AaBb × AaBb menghasilkan fenotipe epistatik (aaB– atau aabb) sebanyak…",
      "pilihan": {
        "a": "1/16",
        "b": "3/16",
        "c": "4/16",
        "d": "7/16"
      },
      "jawaban": "c"
    }
  ]
};

// Transform the data
const questionsData = {};
rawData.soal.forEach(item => {
  const key = item.id.toString();
  questionsData[key] = {
    pertanyaan: item.pertanyaan,
    opsi: item.pilihan,
    jawaban: item.jawaban
  };
});

// Function to update the questions in Firebase
async function updateQuestions() {
  try {
    for (const [key, question] of Object.entries(questionsData)) {
      const questionRef = ref(db, `Soal/Soal_Kuis_2/Soal_Kuis_2_${key}`);
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
