// Konfigurasi FIRE BASE
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
 import { getDatabase, ref, set, push, child, onValue, get, update, remove, query, orderByChild } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

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

//  Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

$(document).ready(function(){
    const getKelas = new Promise((resolve, reject) => {
      const antri = query(ref(db, "listKelas/"))
      onValue(antri, (snapshot) => {
        const kelasList = snapshot.val();
        console.log(kelasList)
        resolve(kelasList);
      });
    });
  

    getKelas.then(kelas =>{
        const tampilData = document.querySelector('#datKelas');
        let nomor = 1;
        for (let key in kelas) {
            console.log(key + " keyy")
            const tr = `
            <tr data-id=${key}>
              <td class="text-center">${nomor}</td>
              <td class="text-center">${kelas[key].kelas}</td>
              <td class="text-center">${kelas[key].token}</td>
              <td class="d-md-flex justify-content-center">
                <button class="delete btn btn-danger mx-1 mt-1">Hapus</button>
              </td>
            </tr>
          `;
    
          nomor ++;
          tampilData.innerHTML += tr;
        }
        $('#example').DataTable({
          responsive: true,
          scrollCollapse: true,
          language: {
            paginate: {
              next: 'Selanjutnya',
              previous: 'Sebelumnya'
            },
            info: 'Menampilkan _END_ data dari _TOTAL_  data', 
            lengthMenu: 'Menampilkan _MENU_ Data',
            search: 'Cari:',
            entri: 'Data',
            showInfo: 'Menampilkan _START_ hingga _END_ dari _TOTAL_ Data',
            zeroRecords: 'Tidak ada data yang ditemukan',
            infoEmpty: 'Tidak ada data yang tersedia',
            show: 'Tampilkan', // Ubah "show" menjadi "Tampilkan"
          },
    
          
        });

        // Fungsi
    onValue(ref(db, "listKelas/"), (snapshot) => {
        const users = snapshot.val();
        console.log(users )
        // Delete
        let deleteButtons = document.querySelectorAll(".delete");
        deleteButtons.forEach((deleteBtn) => {
          deleteBtn.addEventListener("click", () => {
            Swal.fire({
              title: 'Apakah Kamu yakin ingin menghapus Kelas?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#d33',
              cancelButtonColor: '#3085d6',
              confirmButtonText: 'Iya, Hapus data!'
            }).then((result) => {
              if (result.isConfirmed) {
                let userId = deleteBtn.parentElement.parentElement.dataset.id;
                console.log(userId + "id")
                const db = getDatabase();
                remove(ref(db, "listKelas/" + userId));
                Swal.fire({
                  icon: 'success',
                  title: 'Data Kelas Berhasil Terhapus',
                  showConfirButton: false,
                  Timer: 1500,
                }).then(function () {
                  window.location.reload();
                });
              }
            })
          
          });
        });

         // Tambah user
        var tbody = document.querySelector('#tbody');
        var tambahSiswa = document.querySelector('#tambahKelas'),
                popup = document.querySelector('.popup'),
                addform = document.querySelector('.add form'),
            updateform = document.querySelector('.update form');

        function writeUserData(kelas, token) {
            
            let kelasFix = kelas.replace(/\s/g, ""); //menghapus spasi
            const dbRef = ref(db);
            // Mencek data di db
            get(child(dbRef, "listKelas/" + kelasFix)).then((snapshot)=>{
                if(snapshot.exists()){
                Swal.fire({
                    icon: 'warning',
                    title: 'Kelas Telah Terdaftar',
                })
                }else{
                    // set Mengirim value baru ke firebase
                    set(ref(db, 'listKelas/' + kelasFix), {
                    kelas: kelas,
                    token: token,
                    })
                    .then(() => {
                        Swal.fire({
                        icon: 'success',
                        title: 'Data kelas telah berhasil ditambahkan',
                        }).then(function () {
                        window.location.reload();
                        });
                    })
                    .catch((error) => {
                        Swal.fire({
                        icon: 'error',
                        title: 'Gagal!',
                        });
                    });
                }
            });
        }

        tambahSiswa.addEventListener('click', () => {

        document.querySelector('.add').classList.add('active');
        addform.addEventListener('submit', (e) => {
            e.preventDefault();
            writeUserData(
            addform.kelasTambah.value.toUpperCase(),
            generateToken(5), 
            ); 
        });
        });


        // Membuat token
        function generateToken(length) {
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var token = '';
            for (var i = 0; i < length; i++) {
              var randomIndex = Math.floor(Math.random() * characters.length);
              token += characters.charAt(randomIndex);
            }
            return token;
          }
      });
    });
});