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
    
const getKelas = new Promise((resolve, reject) => {
  const antri = query(ref(db, "listKelas/"))
  onValue(antri, (snapshot) => {
    const kelasList = snapshot.val();
    console.log(kelasList)
    resolve(kelasList);
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

const getDataSiswa = new Promise((resolve, reject) => {
            
  const antri = query(ref(db, "UserSiswa/"), orderByChild("VII A"));
  onValue(antri, (snapshot) => {
    const users = snapshot.val();
    resolve(users);
  });
});

$(document).ready(function(){

    $('#cari').click(function(){
      let fixKelas = "";
      let fixKuis = "";

      if($('#kelas').val() == "" || $('#kuis').val() == ""){
        Swal.fire({
          icon: 'error',
          title: 'Mohon Maaf',
          text: 'Tidak ada kelas/kuis yang dipilih',
        })
      }else{
        getDataSiswa.then(users => {
          $('#example1').DataTable().clear().destroy();
          const tampilData = document.querySelector('#dataKuis');
          
          
          for (let user in users) {
            if (users[user].kuis) {
                if(users[user].kelas == ($('#kelas option:selected').text())){
                  const tr = `
                  <tr data-id=${user}>
                    <td class="text-center">${users[user].nisn}</td>
                    <td class="text-capitalize text-center">${users[user].nama}</td>
                    <td class="text-center">${users[user].kelas}</td>
                    <td class="text-center">${users[user].kuis[($('#kuis option:selected').val())].skor}</td>
                    <td class="text-center">${users[user].kuis[($('#kuis option:selected').val())].waktu}</td>
                    <td class="text-center">${users[user].kuis[($('#kuis option:selected').val())].tanggal}</td>
                  </tr>
                `;
            
                tampilData.innerHTML += tr;
  
                }
            }
          }
  
          $('#example1').DataTable({
            dom: '<"top"<"d-flex justify-content-end"B>>'+
            '<"d-flex justify-content-between"l<"show-info">f>'+
            'rt' + 
            '<"bottom"<"d-flex justify-content-between"ip>><"clear">',
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
              show: 'Tampilkan', // Ubah "show" menjadi "Tampilkan",

              
            },
            lengthMenu:  [
              [5, 15, 30, 50, 100],
              [5, 15, 30, 50, 100],
            ],
            buttons: [
              {
                extend: 'pdf',
                text: '<i class="fas fa-file-pdf"></i> PDF', // Teks tombol dengan ikon
                className: 'btn btn-danger', // Gaya tombol
                filename: 'Rekap '+ ($('#kuis option:selected').text())  +' Kelas '+ ($('#kelas option:selected').text()), // Nama file yang diunduh
                title: 'Rekap '+ ($('#kuis option:selected').text())  +' Kelas '+ ($('#kelas option:selected').text()), // Judul  khusus
                customize: function(doc) {

                  doc.defaultStyle.fontSize = 12; 
                  doc.content[1].table.widths = ['*', '*', '*', '*', '*', '*']; // Ukuran kolom tabel

                  // Mengubah tampilan head tabel pada file PDF
                  var colCount = doc.content[1].table.body[0].length;
                  for (var i = 0; i < colCount; i++) {
                    doc.content[1].table.body[0][i].fillColor = '#C5F3FD'; // Warna latar belakang head tabel
                    doc.content[1].table.body[0][i].color = 'black'; // Warna teks head tabel
                  }
                }
              },
              {
                extend: 'excel',
                text: '<i class="fa-sharp fa-solid fa-file-excel"></i> EXCEL', // Teks tombol dengan ikon
                className: 'btn btn-success', // Gaya tombol
                filename: 'Rekap '+ ($('#kuis option:selected').text())  +' Kelas '+ ($('#kelas option:selected').text()), // Nama file yang diunduh
                title: 'Rekap '+ ($('#kuis option:selected').text())  +' Kelas '+ ($('#kelas option:selected').text()), // Judul  khusus
                
              },
              {
                extend: 'print',
                text: '<i class="fa-sharp fa-solid fa-print"></i> Print', // Teks tombol dengan ikon
                title: 'Rekap '+ ($('#kuis option:selected').text())  +' Kelas '+ ($('#kelas option:selected').text()), // Judul cetak khusus
                className: 'btn btn-secondary', // Gaya tombol
                customize: function(win) {
                  // Mengubah gaya cetak
                  $(win.document.body).addClass('new-print-style');
                  $(win.document.body).find('table').addClass('new-print-table');
                }
              },
            ],

          });
  
        });
        $('.detailKuis').html($("#kuis").find("option:selected").text())
    }
    });
    

    function menampilkan(fixKelas, fixKuis){
      
    }
});