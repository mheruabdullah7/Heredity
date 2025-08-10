let sidebar = document.querySelector(".sidebarr");
let sidebarBTN = document.querySelector(".fa-bars");

sidebarBTN.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
})

const images = document.querySelectorAll(".imagess img");
const gambar_modal = document.querySelector(".gambar_modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".tutup");

images.forEach((image) => {
    image.addEventListener("click", () => {
        modalImg.src = image.src;
        modalTxt.innerHTML = image.alt;
        gambar_modal.classList.add("appear");

        close.addEventListener("click", () => {
            gambar_modal.classList.remove("appear");
        });
    });
});

// Data lokal
let nama = sessionStorage.getItem('nama');
let nip = sessionStorage.getItem('nip');

  // Deskripsi
  let nama2 = document.getElementById('namaGuru');
  let nip2 = document.getElementById('nipGuru');
//  var currentUser = null;

menampilkanIdentitas();
  // Functions
  function menampilkanIdentitas(){
  
  if(nip == null ){
    Swal.fire({
      icon: 'error',
      title: 'Mohon Maaf',
      text: 'Kamu Harus Login Terlebih dahulu!',
    })
    .then((result)=>{
      document.location.href  = "../index.html";
    })
  }
  else{
    
      nama2.innerText = nama;
      nip2.innerText = nip;
    }
  }
  
function LogOut(){
  Swal.fire({
    title: 'Apakah Anda yakin ingin keluar?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Iya, Keluar Akun!',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: 'success',
        title: 'Berhasil Keluar',
        showConfirButton: false,
        Timer: 1500,
      }).then(function () {
        location.href = "../index.html";
      sessionStorage.removeItem('nama');
      sessionStorage.removeItem('nip');
      // sessionStorage.removeItem('jeniskelamin');
      });
    }
  });
 
}




     