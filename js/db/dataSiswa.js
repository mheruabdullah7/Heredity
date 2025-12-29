// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Firebase configuration
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
let db;
try {
    const app = initializeApp(firebaseConfig);
    db = getDatabase();
    console.log("Firebase initialized successfully");
} catch (error) {
    console.error("Firebase initialization error:", error);
}

// Deskripsi
let nama2, nisn2, nisnProfil, abs2, kelas2;

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed - dataSiswa.js module loaded");
    
    // Find all elements that need to be updated
    nama2 = document.querySelectorAll('#namaSiswa, #user-nama');
    nisn2 = document.querySelectorAll('#nisnSiswa');
    nisnProfil = document.querySelectorAll('#nisnProfil');
    abs2 = document.querySelectorAll('#absSiswa');
    kelas2 = document.querySelectorAll('#kelasSiswa');
    
    console.log("Found namaSiswa/user-nama elements:", nama2.length);
    console.log("Found nisnSiswa elements:", nisn2.length);
    console.log("Found nisnProfil elements:", nisnProfil.length);
    console.log("Found kelasSiswa elements:", kelas2.length);
    
    // Check localStorage values
    console.log("LocalStorage nama:", localStorage.getItem('nama'));
    console.log("LocalStorage nisns:", localStorage.getItem('nisns'));
    console.log("LocalStorage kelas:", localStorage.getItem('kelas'));
    
    menampilkanIdentitas();
    setupRealtimeListener();
});

// Functions
function menampilkanIdentitas(){
  let nama = localStorage.getItem('nama');
  let nisn = localStorage.getItem('nisns');
  let kelas = localStorage.getItem('kelas');
  
  if(nama == null ){
    Swal.fire({
      icon: 'error',
      title: 'Mohon Maaf',
      text: 'Kamu Harus Login Terlebih dahulu!',
    }).then(()=>{
      document.location.href  = "../../index.html";
    })
  }
  else{
    updateUI(nama, nisn, kelas);
  }
}

function updateUI(namaValue, nisnValue, kelasValue) {
    console.log("Updating UI with:", namaValue, nisnValue, kelasValue);
    
    // Update all nama elements
    for(let i=0; i< nama2.length ; i++ ){
        nama2[i].innerText = namaValue;
    }
    
    // Update nisnProfil elements
    for(let i=0; i< nisnProfil.length ; i++ ){
        nisnProfil[i].innerText = nisnValue;
    }
    
    // Update nisn2 and kelas2 elements
    for(let i=0; i< nisn2.length ; i++ ){
        nisn2[i].innerText = nisnValue;
        if (kelas2[i]) {
            kelas2[i].innerText = kelasValue;
        }
    }
}

function setupRealtimeListener() {
  const userNisn = localStorage.getItem('nisns');
  
  if (userNisn) {
    const userRef = ref(db, 'UserSiswa/' + userNisn);
    
    onValue(userRef, (snapshot) => {
        console.log("User data snapshot:", snapshot.val());
        const userData = snapshot.val();
        if (userData) {
            console.log("Updating localStorage with:", userData); // Debugging log
            localStorage.setItem('nama', userData.nama);
            localStorage.setItem('nisns', userData.nisn);
            localStorage.setItem('kelas', userData.kelas);
            
            // Update UI with the latest data
            updateUI(userData.nama, userData.nisn, userData.kelas);
            
            console.log('Profile data updated from database:', userData);
            console.log("Updated name in UI:", userData.nama); // Debugging log
        }
    }, (error) => {
        console.error('Error listening to database:', error);
    });
  }
}

function LogOut(){
  Swal.fire({
    title: 'Apakah Kamu sudah yakin ingin keluar?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Iya, Keluar!',
    cancelButtonText: 'Batal'
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem('nama');
      localStorage.removeItem('nisns');
      localStorage.removeItem('kelas');
      Swal.fire({
        icon: 'success',
        title: 'Berhasil Keluar',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        location.href = "../../index.html";
      });
    }
  });
}

// Export LogOut function to global scope for onclick handlers
window.LogOut = LogOut;




     