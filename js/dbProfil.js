// Konfigurasi FIRE BASE
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
 import { getDatabase, ref, set, push, child, onValue, get, update, remove, query, orderByChild } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

//  import Croppie from '/croppie';

 import {getStorage, ref as sRef, uploadBytesResumable, getDownloadURL}
 from "https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADUmOEWb7NE5pWV-BwHfAt7pF-IV3PP2U",
  authDomain: "heredity-86b90.firebaseapp.com",
  databaseURL: "https://heredity-86b90-default-rtdb.firebaseio.com",
  projectId: "heredity-86b90",
  storageBucket: "heredity-86b90.firebasestorage.app",
  messagingSenderId: "61653132520",
  appId: "1:61653132520:web:106995cc62a7be388a955d",
  measurementId: "G-P991YR1DP8"
};
//  Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

let nisn = localStorage.getItem('nisns');

const getKelas = new Promise((resolve, reject) => {
    const antri = query(ref(db, "listKelas/"))
    onValue(antri, (snapshot) => {
      const kelasList = snapshot.val();
      resolve(kelasList);
    });
});

onValue(ref(db, "UserSiswa/" + nisn), (snapshot) => {
    const users = snapshot.val();

    $('#namaSiswa, #namaSiswaProfil').html(users.nama);
    $('#nisnSiswa').html(users.nisn);
    $('#kelasSiswa').html(users.kelas);
    if(users.urlGambar != null){
      $('#imgProfile').attr('src', users.urlGambar);
    }

    $('#latihan1').html(users.latihan['latihan-1'].totalPoin);
    $('#latihan2').html(users.latihan['latihan-2'].totalPoin);
    $('#latihan3').html(users.latihan['latihan-3'].totalPoin);
    $('#latihan4').html(users.latihan['latihan-4'].totalPoin);
    $('#latihan5').html(users.latihan['latihan-5'].totalPoin);
    $('#latihan6').html(users.latihan['latihan-6'].totalPoin);


    $('#kuis1').html(users.kuis['kuis-1'].skor);
    $('#kuis2').html(users.kuis['kuis-2'].skor);
    $('#kuis3').html(users.kuis['kuis-3'].skor);
    
    $('#skorEvaluasi').html(users.evaluasi.skor);
     // Edit
     let editButtons = document.querySelectorAll('.edit');
     let keluarButtons = document.querySelector('.keluar');
     let updateform = document.querySelector('.update form');
     
     editButtons.forEach((edit) => {
      edit.addEventListener('click', () => {
        document.querySelector('.update').classList.add('active');

        //Mengambil data kelas di db
      getKelas.then(kelas =>{
          // Hapus opsi-opsi sebelumnya dari elemen select
          $('#kelasEdit').empty();
          // Tambahkan opsi-opsi baru dari data Firebase
          for (var key in kelas) {
            if (kelas.hasOwnProperty(key)) { //untuk memeriksa apakah objek memiliki properti dengan nama tertentu
              var option = $('<option>').val(kelas[key].kelas).text(kelas[key].kelas);
              $('#kelasEdit').append(option);
            }
            
          }
        },function(error) {
          console.log('Error:', error);
      })
        
      get(child(ref(db), `UserSiswa/` + nisn)).then((snapshot) => {
        updateform.namaEdit.value = snapshot.val().nama;
        updateform.nisnEdit.value = snapshot.val().nisn;
        updateform.kelasEdit.value = snapshot.val().kelas;
        updateform.passEdit.value = decPass(snapshot.val().password);
        
        $("#showPasswordBtn").click(function(){
          var passwordInput = $("#passwordSiswa");
          var passwordFieldType = passwordInput.attr("type");

          if (passwordFieldType === "password") {
            passwordInput.attr("type", "text");
          } else {
            passwordInput.attr("type", "password");
           
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
          password: enchPass1(),
        }).then(
          () => {
            Swal.fire({
              icon: 'success',
              title: 'Data diperbarui',
            }).then(() => {
              window.location.reload();
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
     });


    function decPass(dbpass) {
      var decryptedText = CryptoJS.AES.decrypt(dbpass, nisn).toString(CryptoJS.enc.Utf8);
      return decryptedText;
    }

    // mengubah Password ke enckripsi password
    function enchPass1(){
        var pass122 = CryptoJS.AES.encrypt(updateform.passEdit.value, nisn);
        return pass122.toString();
    }

});


var uploadPercentage = document.querySelector(".uploadPercentage");
var progres = document.querySelector(".progres");
var percentVal;
var fileItem;
var fileName;


const inputFile = document.getElementById('fileInp');

inputFile.addEventListener('change', getFile);

function getFile(e) {
  fileItem = e.target.files[0];
  fileName = fileItem.name;
  $('.fileText').html(fileName)

  var reader = new FileReader();
  reader.onload = function(event) {
    var image = new Image();
    image.src = event.target.result;
    
    // Menampilkan gambar dalam elemen previewContainer
    var previewContainer = $('#previewContainer');
    previewContainer.empty();
    previewContainer.append(image);

    // Menginisialisasi Croppie
    var croppie = new Croppie(image, {
      viewport: { width: 200, height: 200 },
      boundary: { width: 300, height: 300 },
      enableOrientation: true
    });
    
    // Menampilkan kontrol cropping
    previewContainer.appendChild(croppie.getContainer());

    // Menangani klik simpan setelah cropping selesai
    $('#uploadImage').click(function() {
      croppie.result('base64').then(function(croppedImage) {
        $('.awal').prop('hidden', true)
        const storage = getStorage();
        const storageRef = sRef(storage, "FotoSiswa/" + nisn);
        
        const UploadTask = uploadBytesResumable(storageRef, croppedImage);
    
          UploadTask.on('state-changed', (snapshot)=>{
            percentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
            uploadPercentage.innerHTML = percentVal + "%";
            progres.style.width = percentVal + "%";
    
          },
          (error) =>{
              swal({
                  title:'File belum berhasil diupload', 
                  icon : 'warning'
              });
          },
          ()=>{
              getDownloadURL(UploadTask.snapshot.ref).then((downloadURL)=>{
                if(downloadURL != ""){
                  $('.imageUploaded img').attr("src", downloadURL);
                  $('.imageUploaded img').css("display", "block")
    
                }
                update(ref(db, `UserSiswa/` + nisn), {
                  urlGambar: downloadURL,
                });
              });
          }
          );
      });
    });
  };
  reader.readAsDataURL(fileItem);
}

// function uploadImage(){
  // $('#uploadImage').click(function(){

  //   $('.awal').prop('hidden', true)
  //   const storage = getStorage();
  //   const storageRef = sRef(storage, "FotoSiswa/" + nisn);
    
  //   const UploadTask = uploadBytesResumable(storageRef, fileItem);

  //     UploadTask.on('state-changed', (snapshot)=>{
  //       percentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
  //       uploadPercentage.innerHTML = percentVal + "%";
  //       progres.style.width = percentVal + "%";

  //     },
  //     (error) =>{
  //         swal({
  //             title:'File belum berhasil diupload', 
  //             icon : 'warning'
  //         });
  //     },
  //     ()=>{
  //         getDownloadURL(UploadTask.snapshot.ref).then((downloadURL)=>{
  //           if(downloadURL != ""){
  //             $('.imageUploaded img').attr("src", downloadURL);
  //             $('.imageUploaded img').css("display", "block")

  //           }
  //           update(ref(db, `UserSiswa/` + nisn), {
  //             urlGambar: downloadURL,
  //           });
  //         });
  //     }
  //     );
  // })


