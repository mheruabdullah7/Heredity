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
const dbref = ref(db, "UserSiswa/");
    
$(document).ready(function(){
  const getKelas = new Promise((resolve, reject) => {
    const antri = query(ref(db, "listKelas/"))
    onValue(antri, (snapshot) => {
      const kelasList = snapshot.val();
      resolve(kelasList);
    });
  });

  const getDataSiswa = new Promise((resolve, reject) => {
    const antri = query(ref(db, "UserSiswa/"))
    onValue(antri, (snapshot) => {
      const users = snapshot.val();
      resolve(users);
    });
  });

  getKelas.then(kelas =>{
      for (var key in kelas) {
        if (kelas.hasOwnProperty(key)) { //untuk memeriksa apakah objek memiliki properti dengan nama tertentu
          var option = $('<option>').val(key).text(kelas[key].kelas);
          $('#kelas').append(option);
        }
      }
    }, function(error) {
      console.log('Error:', error);
  })

  getDataSiswa.then(users => {
    const tampilData = document.querySelector('#dataSiswa');
    for (let user in users) {

      const tr = `
        <tr data-id=${user}>
          <td class="text-center">${users[user].nisn}</td>
          <td class="text-capitalize text-center">${users[user].nama}</td>
          <td class="text-center">${users[user].kelas}</td>
          <td class="d-md-flex justify-content-center">
            <button class="edit btn btn-primary mx-1 mt-1" data-bs-toggle="modal" data-bs-target="#editData" id="editSiswa">
              Ubah
            </button>
            <button class="delete btn btn-danger mx-1 mt-1">
              Hapus
            </button>
          </td>
        </tr>
      `;

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
      // lengthMenu:  [
      //   [5, 15, 30, 50, 100],
      //   [5, 15, 30, 50, 100],
      // ],
      
    });

    // Fungsi
    onValue(dbref, (snapshot) => {
      const users = snapshot.val();
      // Delete
      let deleteButtons = document.querySelectorAll(".delete");
      deleteButtons.forEach((deleteBtn) => {
        deleteBtn.addEventListener("click", () => {
          Swal.fire({
            title: 'Apakah Kamu yakin ingin menghapus Akun?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Iya, Hapus data!'
          }).then((result) => {
            if (result.isConfirmed) {
              let userId = deleteBtn.parentElement.parentElement.dataset.id;
              const db = getDatabase();
              remove(ref(db, "UserSiswa/" + userId));
              Swal.fire({
                icon: 'success',
                title: 'Data Berhasil Terhapus',
                showConfirButton: false,
                Timer: 1500,
              }).then(function () {
                window.location.reload();
              });
            }
          })
        
        });
      });

      // Edit
      let editButtons = document.querySelectorAll('.edit');
      let keluarButtons = document.querySelector('.keluar');
      let updateform = document.querySelector('.update form');
      editButtons.forEach((edit) => {
        edit.addEventListener('click', () => {
          document.querySelector('.update').classList.add('active');
          let userId = edit.parentElement.parentElement.dataset.id;
          // console.log(userId)
          const dbRef = ref(db);
          

          getKelas.then(kelas =>{
            // Hapus opsi-opsi sebelumnya dari elemen select
            $('#kelasEdit').empty();
            // Tambahkan opsi-opsi baru dari data Firebase
            // console.log(kelas)
            for (var key in kelas) {
              if (kelas.hasOwnProperty(key)) { //untuk memeriksa apakah objek memiliki properti dengan nama tertentu
                var option = $('<option>').val(kelas[key].kelas).text(kelas[key].kelas);
                $('#kelasEdit').append(option);
              }
              
            }
          }, function(error) {
            console.log('Error:', error);
        })
          
          get(child(dbRef, `UserSiswa/` + userId)).then((snapshot) => {
            updateform.namaEdit.value = snapshot.val().nama;
            updateform.nisnEdit.value = snapshot.val().nisn;
            updateform.kelasEdit.value = snapshot.val().kelas;
            // updateform.absenEdit.value = snapshot.val().absen;
            updateform.passEdit.value = decPass(snapshot.val().password);

            $("#showPasswordBtn").click(function(){
              var passwordInput = $("#passwordSiswa");
              var passwordFieldType = passwordInput.attr("type");
    
              if (passwordFieldType === "password") {
                passwordInput.attr("type", "text");
                $('#mataPW').toggleClass("fa-eye fa-eye-slash");
                $('#mataPW').css("back")
                $('#btnEyePw').css({"background" : "#6c757d" , "color" : "white"})
        
              } else {
                passwordInput.attr("type", "password");
                $('#mataPW').toggleClass("fa-eye-slash fa-eye");
                $('#btnEyePw').css({"background" : "white" , "color" : "#6c757d"})
              }
            });
          });
          updateform.addEventListener('submit', (e) => {
            e.preventDefault();
            // console.log(updateform.kelasEdit.value)
            // console.log(updateform.namaEdit.value)
            // console.log(updateform.nisnEdit.value)
            update(ref(db, `UserSiswa/` + (updateform.nisnEdit.value)), {
              nama: updateform.namaEdit.value,
              nisn: updateform.nisnEdit.value,
              kelas: updateform.kelasEdit.value,
              // absen:updateform.absenEdit.value,
              password: enchPass1(),
            }).then(
              () => {
                Swal.fire({
                  icon: 'success',
                  title: 'Data diperbarui',
                }).then(() => {
                  document.querySelector('.update').classList.remove('active');
                  get(child(dbRef, `UserSiswa/` + (updateform.nisnEdit.value))).then((snapshot) => {
                    updateform.namaEdit.value = snapshot.val().nama;
                    updateform.nisnEdit.value = snapshot.val().nisn;
                    updateform.kelasEdit.value = snapshot.val().kelas;
                    // updateform.absenEdit.value = snapshot.val().absen;
                    updateform.passEdit.value = decPass(snapshot.val().password);
                  });
                  
                });
              },
              (onRejected) => {
                Swal.fire({
                  icon: 'error',
                  title: 'Gagal',
                });
              }
            );
          });
        });
    
        keluarButtons.addEventListener('click', () => {
          window.location.reload();
          $('#kelasEdit').empty();
        });

        // mengubah dari enckripsi password ke teks
        function decPass(dbpass) {
          var decryptedText = CryptoJS.AES.decrypt(dbpass, updateform.nisnEdit.value).toString(CryptoJS.enc.Utf8);
          return decryptedText;
        }
      });
    });

    // Tambah user
    
    var tbody = document.querySelector('#tbody');
    var tambahSiswa = document.querySelector('#tambahSiswa'),
              popup = document.querySelector('.popup'),
            addform = document.querySelector('.add form'),
          updateform = document.querySelector('.update form');

    $("#showPasswordTambahBtn").click(function(){
      var passwordInput = $("#passwordTambahSiswa");
      var passwordFieldType = passwordInput.attr("type");

      if (passwordFieldType === "password") {
        passwordInput.attr("type", "text");
        $('#mataPW').toggleClass("fa-eye fa-eye-slash");
        $('#mataPW').css("back")
        $('#btnEyePw').css({"background" : "#6c757d" , "color" : "white"})

      } else {
        passwordInput.attr("type", "password");
        $('#mataPW').toggleClass("fa-eye-slash fa-eye");
        $('#btnEyePw').css({"background" : "white" , "color" : "#6c757d"})
      }
    });

    function writeUserData(nama, nisn, kelas) {
      const dbRef = ref(db);
      // Mencek data di db
      get(child(dbRef, "UserSiswa/" + nisn)).then((snapshot)=>{
        if(snapshot.exists()){
          Swal.fire({
            icon: 'warning',
            title: 'NISN Sudah Terdaftar Sebelumnya',
          })
        }else{
          
            // set Mengirim value baru ke firebase
            set(ref(db, 'UserSiswa/' + nisn), {
              nama: nama,
              nisn: nisn,
              kelas: kelas,
              // absen: absen,
              password: enchPass(),
              kuis: {
                  "kuis-1": 
                      {
                          skor: "",
                          tanggal: "",
                          waktu: ""
                      }
                  ,
                  "kuis-2": 
                      {
                          skor: "",
                          tanggal: "",
                          waktu: ""
                      }
                  ,
                  "kuis-3": 
                      {
                          skor: "",
                          tanggal: "",
                          waktu: ""
                      }
                  ,
              },
              latihan: {
                  "latihan-1": 
                      {
                          totalPoin: "",
                          tanggal: "",
                          waktu: ""
                      }
                  ,
                  "latihan-2": 
                      {
                          totalPoin: "",
                          tanggal: "",
                          waktu: ""
                      }
                  ,
                  "latihan-3": 
                      {
                          totalPoin: "",
                          tanggal: "",
                          waktu: ""
                      }
                  ,
                  "latihan-4": 
                      {
                          totalPoin: "",
                          tanggal: "",
                          waktu: ""
                      }
                  ,
                  "latihan-5": 
                      {
                          totalPoin: "",
                          tanggal: "",
                          waktu: ""
                      }
                  ,
                  "latihan-6": 
                      {
                          totalPoin: "",
                          tanggal: "",
                          waktu: ""
                      }
                  ,
              },
              evaluasi:
                  {
                      skor: "",
                      tanggal: "",
                      waktu: ""
                  }
              ,
            })
              .then(() => {
                Swal.fire({
                  icon: 'success',
                  title: 'Data siswa telah berhasil ditambahkan',
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


    $("#tambahSiswaClick").click(function(){
      getKelas.then(kelas =>{
            // Hapus opsi-opsi sebelumnya dari elemen select
            // $('#kelas').empty();
            // Tambahkan opsi-opsi baru dari data Firebase
            // console.log(kelas)
            $('#kelasadd').empty();
            for (var key in kelas) {
              if (kelas.hasOwnProperty(key)) { //untuk memeriksa apakah objek memiliki properti dengan nama tertentu
                var option = $('<option>').val(kelas[key].kelas).text(kelas[key].kelas);
                $('#kelasadd').append(option);
              }
            }
          }, function(error) {
            console.log('Error:', error);
        })
    });
    tambahSiswa.addEventListener('click', () => {
      document.querySelector('.add').classList.add('active');
      addform.addEventListener('submit', (e) => {
        e.preventDefault();
        if(!Validation()){
            return;
        }
        writeUserData(
          addform.namaTambah.value, 
          addform.nisTambah.value, 
          addform.kelasTambah.value,
          // addform.absenTambah.value, 
          ); 
      });
    });

    // Mencek input kosong 
    function isEmptyOrSpace(str){
      return str == null || str.match(/^ *$/) !== null;
    }

    function Validation(){
      var nameregex = /^[a-zA-Z\s]+$/; //cek nama hanya bisa diinput oleh huruf
      var nisnregex = /^\d+$/; // cek nisn hanya bisa menginput angka


      if(isEmptyOrSpace(addform.namaTambah.value)||isEmptyOrSpace(addform.nisTambah.value)||isEmptyOrSpace(addform.passTambah.value)||isEmptyOrSpace(addform.kelasTambah.value)){
        Swal.fire({
          icon: 'error',
          title: 'Data masih ada yang kosong',
          text: 'Mohon Cek Kembali Lagi!',
        })
          return false;
      }

      if(!nameregex.test(addform.namaTambah.value)){
        Swal.fire({
          icon: 'warning',
          title: 'Nama hanya bisa memuat huruf saja',
          text: 'Mohon Cek Kembali Lagi!',
        })
        return false;
      }
      if(!nisnregex.test(addform.nisTambah.value)){
          Swal.fire({
              icon: 'warning',
              title: 'Mohon Maaf',
              text: 'NISN hanya bisa memuat angka saja',
          })
          return false;
      }

      return true;
    }

    // mengubah pw ke Encription password
    function enchPass(){
      var pass12 = CryptoJS.AES.encrypt(addform.passTambah.value, addform.nisTambah.value);
      return pass12.toString()
    }

    function enchPass1(){
      var pass122 = CryptoJS.AES.encrypt(updateform.passEdit.value, updateform.nisnEdit.value);
      return pass122.toString();
    }
    
  })

  $('#cari').click(function(){
           

    // console.log(($('#kelas option:selected').val()) + " kelas ")
    if(($('#kelas option:selected').val()) == ""){
      Swal.fire({
        icon: 'error',
        title: 'Mohon Maaf',
        text: 'Tidak ada kelas yang dipilih',
      })
    }else{
      getDataSiswa.then(users => {
        $('#example').DataTable().clear().destroy();
        const tampilData = document.querySelector('#dataSiswa');
        for (let user in users) {
        if(users[user].kelas == ($('#kelas option:selected').text())){
          const tr = `
            <tr data-id=${user}>
              <td class="text-center">${users[user].nisn}</td>
              <td class="text-capitalize text-center">${users[user].nama}</td>
              <td class="text-center">${users[user].kelas}</td>
              <td class="d-md-flex justify-content-center">
                <button class="edit btn btn-primary mx-1 mt-1" data-bs-toggle="modal" data-bs-target="#editData">Ubah</button>
                <button class="delete btn btn-danger mx-1 mt-1">Hapus</button>
              </td>
            </tr>
          `;
  
          tampilData.innerHTML += tr;
        }
        }
        $('#example').DataTable({
          scrollY:     300,
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
        onValue(dbref, (snapshot) => {
          const users = snapshot.val();
          // Delete
          let deleteButtons = document.querySelectorAll(".delete");
          deleteButtons.forEach((deleteBtn) => {
            deleteBtn.addEventListener("click", () => {
              Swal.fire({
                title: 'Apakah Kamu yakin ingin menghapus Akun?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Iya, Hapus data!'
              }).then((result) => {
                if (result.isConfirmed) {
                  let userId = deleteBtn.parentElement.parentElement.dataset.id;
                  const db = getDatabase();
                  remove(ref(db, "UserSiswa/" + userId));
                  Swal.fire({
                    icon: 'success',
                    title: 'Data Berhasil Terhapus',
                    showConfirButton: false,
                    Timer: 1500,
                  }).then(function () {
                    window.location.reload();
                  });
                }
              })
            
            });
          });
  
          // Edit
          let editButtons = document.querySelectorAll('.edit');
          let keluarButtons = document.querySelector('.keluar');
          let updateform = document.querySelector('.update form');
          editButtons.forEach((edit) => {
            edit.addEventListener('click', () => {
              document.querySelector('.update').classList.add('active');
              let userId = edit.parentElement.parentElement.dataset.id;
              // console.log(userId)
              const dbRef = ref(db);
              

              getKelas.then(kelas =>{
                // Hapus opsi-opsi sebelumnya dari elemen select
                $('#kelasEdit').empty();
                // Tambahkan opsi-opsi baru dari data Firebase
                // console.log(kelas)
                for (var key in kelas) {
                  if (kelas.hasOwnProperty(key)) { //untuk memeriksa apakah objek memiliki properti dengan nama tertentu
                    var option = $('<option>').val(kelas[key].kelas).text(kelas[key].kelas);
                    $('#kelasEdit').append(option);
                  }
                  
                }
              }, function(error) {
                console.log('Error:', error);
            })
              
              get(child(dbRef, `UserSiswa/` + userId)).then((snapshot) => {
                updateform.namaEdit.value = snapshot.val().nama;
                updateform.nisnEdit.value = snapshot.val().nisn;
                updateform.kelasEdit.value = snapshot.val().kelas;
                // updateform.absenEdit.value = snapshot.val().absen;
                updateform.passEdit.value = decPass(snapshot.val().password);
                $("#showPasswordBtn").click(function(){
                  var passwordInput = $("#passwordSiswa");
                  var passwordFieldType = passwordInput.attr("type");
        
                  if (passwordFieldType === "password") {
                    passwordInput.attr("type", "text");
                    $('#mataPW').toggleClass("fa-eye fa-eye-slash");
                    $('#mataPW').css("back")
                    $('#btnEyePw').css({"background" : "#6c757d" , "color" : "white"})
            
                  } else {
                    passwordInput.attr("type", "password");
                    $('#mataPW').toggleClass("fa-eye-slash fa-eye");
                    $('#btnEyePw').css({"background" : "white" , "color" : "#6c757d"})
                  }
                });
              });
              updateform.addEventListener('submit', (e) => {
                e.preventDefault();
                // console.log(updateform.kelasEdit.value)
                // console.log(updateform.namaEdit.value)
                // console.log(updateform.nisnEdit.value)
                update(ref(db, `UserSiswa/` + (updateform.nisnEdit.value)), {
                  nama: updateform.namaEdit.value,
                  nisn: updateform.nisnEdit.value,
                  kelas: updateform.kelasEdit.value,
                  // absen:updateform.absenEdit.value,
                  password: enchPass1(),
                }).then(
                  () => {
                    Swal.fire({
                      icon: 'success',
                      title: 'Data diperbarui',
                    }).then(() => {
                      document.querySelector('.update').classList.remove('active');
                      get(child(dbRef, `UserSiswa/` + (updateform.nisnEdit.value))).then((snapshot) => {
                        updateform.namaEdit.value = snapshot.val().nama;
                        updateform.nisnEdit.value = snapshot.val().nisn;
                        updateform.kelasEdit.value = snapshot.val().kelas;
                        // updateform.absenEdit.value = snapshot.val().absen;
                        updateform.passEdit.value = decPass(snapshot.val().password);
                      });
                      
                    });
                  },
                  (onRejected) => {
                    Swal.fire({
                      icon: 'error',
                      title: 'Gagal',
                    });
                  }
                );
              });
            });
        
            keluarButtons.addEventListener('click', () => {
              window.location.reload();
              $('#kelasEdit').empty();
            });

            // mengubah dari enckripsi password ke teks
            function decPass(dbpass) {
              var decryptedText = CryptoJS.AES.decrypt(dbpass, updateform.nisnEdit.value).toString(CryptoJS.enc.Utf8);
              return decryptedText;
            }
            function enchPass1(){
              var pass122 = CryptoJS.AES.encrypt(updateform.passEdit.value, updateform.nisnEdit.value);
              return pass122.toString();
            }
          });
        });

      });
    }
  });

});
