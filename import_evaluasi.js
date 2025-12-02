// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set, remove } = require("firebase/database");

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

// Data soal evaluasi
const dataSoal = {
  "soal": [
    {
      "no": 1,
      "pertanyaan": "Hukum Mendel I berbunyi...",
      "pilihan": [
        "Alel-alel berbeda akan berpasangan secara bebas",
        "Setiap alel akan memisah secara bebas saat pembentukan gamet",
        "Gen selalu muncul secara dominan",
        "Keturunan selalu memiliki sifat sama seperti induknya"
      ],
      "jawaban": "Setiap alel akan memisah secara bebas saat pembentukan gamet"
    },
    {
      "no": 2,
      "pertanyaan": "Hukum Mendel II menyatakan bahwa...",
      "pilihan": [
        "Alel dominan selalu menutupi alel resesif",
        "Gen tidak dapat berubah",
        "Setiap pasangan alel diwariskan secara bebas satu sama lain",
        "Semua sifat ditentukan oleh satu gen"
      ],
      "jawaban": "Setiap pasangan alel diwariskan secara bebas satu sama lain"
    },
    {
      "no": 3,
      "pertanyaan": "Pada persilangan monohibrid Aa × Aa, rasio fenotipe F2 adalah...",
      "pilihan": ["1:1", "3:1", "1:2:1", "9:3:3:1"],
      "jawaban": "3:1"
    },
    {
      "no": 4,
      "pertanyaan": "Pada persilangan dihibrid AaBb × AaBb, rasio fenotipe F2 adalah...",
      "pilihan": ["1:1", "3:1", "9:3:3:1", "1:2:1"],
      "jawaban": "9:3:3:1"
    },
    {
      "no": 5,
      "pertanyaan": "Yang dimaksud penyimpangan semu Hukum Mendel adalah...",
      "pilihan": [
        "Gen tidak mengikuti hukum segregasi",
        "Gen berubah bentuk",
        "Fenotipe tidak sesuai perbandingan Mendel karena ada interaksi antar gen",
        "Sifat makhluk hidup tidak diwariskan"
      ],
      "jawaban": "Fenotipe tidak sesuai perbandingan Mendel karena ada interaksi antar gen"
    },
    {
      "no": 6,
      "pertanyaan": "Atavisme terjadi ketika...",
      "pilihan": [
        "Gen resesif menutupi dominan",
        "Sifat nenek moyang muncul kembali",
        "Gen dominan tidak muncul tanpa gen lain",
        "Dua gen bekerja sama"
      ],
      "jawaban": "Sifat nenek moyang muncul kembali"
    },
    {
      "no": 7,
      "pertanyaan": "Kriptomeri terjadi jika...",
      "pilihan": [
        "Dua gen saling menutupi",
        "Sifat muncul bila dua gen dominan hadir",
        "Gen dominan tidak tampak tanpa kehadiran gen lain",
        "Fenotipe bersifat campuran"
      ],
      "jawaban": "Gen dominan tidak tampak tanpa kehadiran gen lain"
    },
    {
      "no": 8,
      "pertanyaan": "Epistasis adalah peristiwa ketika...",
      "pilihan": [
        "Dua gen saling bekerja sama",
        "Satu gen menutupi ekspresi gen lain",
        "Gen resesif lebih kuat dari dominan",
        "Sifat muncul melalui mutasi"
      ],
      "jawaban": "Satu gen menutupi ekspresi gen lain"
    },
    {
      "no": 9,
      "pertanyaan": "Gen yang ekspresinya tertutup oleh gen epistatik disebut...",
      "pilihan": ["Kodominan", "Hipostatik", "Komplementer", "Polimerik"],
      "jawaban": "Hipostatik"
    },
    {
      "no": 10,
      "pertanyaan": "Polimeri ditandai oleh...",
      "pilihan": [
        "Gen saling menutupi",
        "Satu sifat dipengaruhi banyak gen yang bekerja aditif",
        "Sifat dipengaruhi gen penghambat",
        "Gen dominan tampak hanya bila homozigot"
      ],
      "jawaban": "Satu sifat dipengaruhi banyak gen yang bekerja aditif"
    },
    {
      "no": 11,
      "pertanyaan": "Persilangan P: TT × tt menghasilkan F1 dengan genotipe...",
      "pilihan": ["TT", "tt", "Tt", "TtTT"],
      "jawaban": "Tt"
    },
    {
      "no": 12,
      "pertanyaan": "Pada dihibrid AaBb × aabb, gamet yang dihasilkan individu AaBb adalah...",
      "pilihan": ["AB saja", "ab saja", "AB, Ab, aB, ab", "Aa, Bb"],
      "jawaban": "AB, Ab, aB, ab"
    },
    {
      "no": 13,
      "pertanyaan": "Persilangan Aa × aa menghasilkan rasio fenotipe...",
      "pilihan": ["1:1", "3:1", "1:2:1", "9:3:3:1"],
      "jawaban": "1:1"
    },
    {
      "no": 14,
      "pertanyaan": "Pola komplementer (9:7) menghasilkan fenotipe '7' jika...",
      "pilihan": [
        "Kedua gen dominan ada",
        "Salah satu gen dominan tidak ada",
        "Gen resesif homozigot selalu muncul",
        "Semua gamet sama"
      ],
      "jawaban": "Salah satu gen dominan tidak ada"
    },
    {
      "no": 15,
      "pertanyaan": "Dalam epistasis dominan (12:3:1), fenotipe terbanyak disebabkan oleh genotipe yang memiliki...",
      "pilihan": [
        "Epistatik resesif",
        "Epistatik dominan",
        "Epistatik ganda",
        "Dua gen resesif"
      ],
      "jawaban": "Epistatik dominan"
    },
    {
      "no": 16,
      "pertanyaan": "Persilangan AaBb (interaksi komplementer) × aabb menghasilkan keturunan yang mengekspresikan sifat dominan bila...",
      "pilihan": [
        "Setidaknya satu gen dominan hadir",
        "Kedua gen dominan hadir",
        "Tidak ada gen dominan",
        "Semua gamet sama"
      ],
      "jawaban": "Kedua gen dominan hadir"
    },
    {
      "no": 17,
      "pertanyaan": "Pada polimeri tiga gen (A, B, C), semakin banyak alel dominan berarti sifat makin kuat. Individu AabbCc memiliki jumlah alel dominan...",
      "pilihan": ["1", "2", "3", "4"],
      "jawaban": "3"
    },
    {
      "no": 18,
      "pertanyaan": "Pada epistasis resesif (9:3:4), fenotipe '4' muncul ketika...",
      "pilihan": [
        "Individu memiliki alel dominan epistatik",
        "Individu memiliki homozigot resesif pada gen epistatik",
        "Individu memiliki dua gen dominan",
        "Semua gamet heterozigot"
      ],
      "jawaban": "Individu memiliki homozigot resesif pada gen epistatik"
    },
    {
      "no": 19,
      "pertanyaan": "Hasil persilangan dihibrid Aabb × aaBb adalah...",
      "pilihan": [
        "Semua keturunan sama",
        "Rasio 1:1:1:1",
        "Semua heterozigot",
        "Semua menunjukkan fenotipe dominan"
      ],
      "jawaban": "Rasio 1:1:1:1"
    },
    {
      "no": 20,
      "pertanyaan": "Dalam interaksi gen komplementer, persilangan AaBb × AaBb menghasilkan fenotipe dominan jika...",
      "pilihan": [
        "Hanya gen A dominan",
        "Hanya gen B dominan",
        "Gen A dan B sama-sama dominan",
        "Semua alel resesif"
      ],
      "jawaban": "Gen A dan B sama-sama dominan"
    }
  ]
};

// Fungsi untuk mengonversi jawaban ke huruf (a, b, c, d)
function getJawabanHuruf(jawaban, pilihan) {
  const index = pilihan.indexOf(jawaban);
  return String.fromCharCode(97 + index); // 97 adalah kode ASCII untuk 'a'
}

// Transform the data
const questionsData = {};
dataSoal.soal.forEach(item => {
  const key = item.no.toString();
  const pilihan = item.pilihan;
  const jawabanIndex = pilihan.indexOf(item.jawaban);
  const jawabanLetter = String.fromCharCode(97 + jawabanIndex); // 97 is 'a'
  questionsData[key] = {
    pertanyaan: item.pertanyaan,
    opsi: {
      a: pilihan[0],
      b: pilihan[1],
      c: pilihan[2],
      d: pilihan[3]
    },
    jawaban: jawabanLetter
  };
});

// Function to update the questions in Firebase
async function importData() {
  try {
    for (const [key, question] of Object.entries(questionsData)) {
      const questionRef = ref(db, `Soal/Soal_Evaluasi/Soal_Evaluasi_${key}`);
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
    console.log("All evaluation questions imported successfully!");
  } catch (error) {
    console.error("Error importing questions:", error);
  }
}

// Call the import function
importData();
