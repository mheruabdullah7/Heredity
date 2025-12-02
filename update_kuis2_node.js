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
      "no": 1,
      "pertanyaan": "Penyimpangan semu Hukum Mendel adalah peristiwa ketika...",
      "pilihan": [
        "Gen tidak mengikuti prinsip segregasi sama sekali",
        "Fenotipe F2 tidak memperlihatkan nisbah Mendel karena adanya interaksi antargen",
        "Gen mengalami mutasi secara spontan",
        "Setiap alel selalu dominan sempurna"
      ],
      "jawaban": "Fenotipe F2 tidak memperlihatkan nisbah Mendel karena adanya interaksi antargen"
    },
    {
      "no": 2,
      "pertanyaan": "Atavisme dalam genetika ditandai dengan...",
      "pilihan": [
        "Munculnya sifat baru yang tidak ada pada induk",
        "Munculnya sifat nenek moyang yang tidak tampak pada generasi sebelumnya",
        "Fenomena dua gen saling menutupi",
        "Gen dominan menutupi gen resesif"
      ],
      "jawaban": "Munculnya sifat nenek moyang yang tidak tampak pada generasi sebelumnya"
    },
    {
      "no": 3,
      "pertanyaan": "Kriptomeri terjadi ketika...",
      "pilihan": [
        "Gen dominan tidak tampak jika tidak didampingi gen lain",
        "Dua gen sama-sama kuat sehingga menghasilkan sifat campuran",
        "Gen resesif menutupi gen dominan",
        "Gen homozigot menghasilkan sifat baru"
      ],
      "jawaban": "Gen dominan tidak tampak jika tidak didampingi gen lain"
    },
    {
      "no": 4,
      "pertanyaan": "Epistasis adalah peristiwa ketika...",
      "pilihan": [
        "Dua gen sama-sama muncul bersamaan",
        "Satu gen menutupi ekspresi gen lain yang tidak sealel",
        "Gen dominan berubah menjadi resesif",
        "Sifat yang muncul berasal dari dua gen dominan"
      ],
      "jawaban": "Satu gen menutupi ekspresi gen lain yang tidak sealel"
    },
    {
      "no": 5,
      "pertanyaan": "Gen yang ekspresinya tertutup oleh gen epistatik disebut...",
      "pilihan": [
        "Kodominan",
        "Homozigot",
        "Hipostatik",
        "Letal"
      ],
      "jawaban": "Hipostatik"
    },
    {
      "no": 6,
      "pertanyaan": "Pola komplementer terjadi ketika...",
      "pilihan": [
        "Dua gen harus bekerja bersama untuk menghasilkan fenotipe tertentu",
        "Dua gen saling menutupi",
        "Gen dominan tidak muncul tanpa gen penghambat",
        "Fenotipe merupakan perpaduan dua gen dominan"
      ],
      "jawaban": "Dua gen harus bekerja bersama untuk menghasilkan fenotipe tertentu"
    },
    {
      "no": 7,
      "pertanyaan": "Ciri utama polimeri adalah...",
      "pilihan": [
        "Sifat hanya dipengaruhi satu gen",
        "Gen memiliki pengaruh saling meniadakan",
        "Banyak gen memberikan pengaruh kecil yang bersifat aditif",
        "Sifat muncul karena gen resesif ganda"
      ],
      "jawaban": "Banyak gen memberikan pengaruh kecil yang bersifat aditif"
    },
    {
      "no": 8,
      "pertanyaan": "Dalam epistasis dominan (misal 12:3:1), fenotipe dengan jumlah terbesar disebabkan oleh...",
      "pilihan": [
        "Alel epistatik resesif",
        "Alel epistatik dominan",
        "Interaksi komplementer",
        "Polimeri"
      ],
      "jawaban": "Alel epistatik dominan"
    },
    {
      "no": 9,
      "pertanyaan": "Jika dua gen komplementer menyusun fenotipe dengan nisbah 9:7, maka fenotipe '7' muncul ketika...",
      "pilihan": [
        "Kedua gen dominan hadir",
        "Salah satu gen dominan tidak hadir",
        "Kedua gen resesif dominan",
        "Kedua gen mengalami mutasi"
      ],
      "jawaban": "Salah satu gen dominan tidak hadir"
    },
    {
      "no": 10,
      "pertanyaan": "Sifat tinggi badan pada manusia dipengaruhi banyak gen, semakin banyak alel dominan menghasilkan tinggi lebih besar. Pola ini merupakan contoh...",
      "pilihan": [
        "Epistasis",
        "Komplementer",
        "Kodominansi",
        "Polimeri"
      ],
      "jawaban": "Polimeri"
    }
  ]
};

// Transform the data
const questionsData = {};
rawData.soal.forEach(item => {
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
