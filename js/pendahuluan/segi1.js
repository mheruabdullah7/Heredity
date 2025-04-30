// // latihan1
// // Inisialisasi array untuk menyimpan status jawaban
let jawabanBenar = [false, true, true, false, false, true, true, false];

function cekJawaban() {
  let g1 = document.getElementById("g1");
  let g2 = document.getElementById("g2");
  let g3 = document.getElementById("g3");
  let g4 = document.getElementById("g4");
  let g5 = document.getElementById("g5");
  let g6 = document.getElementById("g6");
  let g7 = document.getElementById("g7");
  let g8 = document.getElementById("g8");

  let r1 = document.getElementById("r1");
  let r2 = document.getElementById("r2");
  let r3 = document.getElementById("r3");
  let r4 = document.getElementById("r4");
  let r5 = document.getElementById("r5");
  let r6 = document.getElementById("r6");
  let r7 = document.getElementById("r7");
  let r8 = document.getElementById("r8");

  let response;

  if (g1.checked == jawabanBenar[0]) {
    response = "Jawabanmu Benar!<br>Ini adalah bukan bangun datar segi banyak.";
    r1.classList.add("text-success");
    // r1.innerHTML = "<i class='bi bi-check-circle-fill text-success'></i>";
  } else {
    response = "Jawabanmu Salah!<br>Ini adalah bukan bangun datar segi banyak.";
    r1.classList.add("text-danger");
  }
  r1.innerHTML = response;

  if (g2.checked == jawabanBenar[1]) {
    response = "Jawabanmu Benar!<br>Ini adalah bangun datar segi banyak.";
    r2.classList.add("text-success");
    // r2.innerHTML = "<i class='bi bi-check-circle-fill text-success'></i>";
  } else {
    response = "Jawabanmu Salah!<br>Ini adalah bukan bangun datar segi banyak.";
    r2.classList.add("text-danger");
    // r2.innerHTML = "<i class='bi bi-x-circle-fill text-danger'></i>";
  }
  r2.innerHTML = response;

  if (g3.checked == jawabanBenar[2]) {
    response = "Jawabanmu Benar!<br>Ini adalah bangun datar segi banyak.";
    r3.classList.add("text-success");
  } else {
    response = "Jawabanmu Salah!<br>Ini adalah bukan bangun datar segi banyak.";
    r3.classList.add("text-danger");
  }
  r3.innerHTML = response;

  if (g4.checked == jawabanBenar[3]) {
    response = "Jawabanmu Benar!<br>Ini adalah bukan bangun datar segi banyak.";
    r4.classList.add("text-success");
  } else {
    response = "Jawabanmu Salah!<br>Ini adalah bukan bangun datar segi banyak.";
    r4.classList.add("text-danger");
  }
  r4.innerHTML = response;

  if (g5.checked == jawabanBenar[4]) {
    response = "Jawabanmu Benar!<br>Ini adalah bukan bangun datar segi banyak.";
    r5.classList.add("text-success");
  } else {
    response = "Jawabanmu Salah!<br>Ini adalah bukan bangun datar segi banyak.";
    r5.classList.add("text-danger");
  }
  r5.innerHTML = response;

  if (g6.checked == jawabanBenar[5]) {
    response = "Jawabanmu Benar!<br>Ini adalah bangun datar segi banyak.";
    r6.classList.add("text-success");
  } else {
    response = "Jawabanmu Salah!<br>Ini adalah bukan bangun datar segi banyak.";
    r6.classList.add("text-danger");
  }
  r6.innerHTML = response;

  if (g7.checked == jawabanBenar[6]) {
    response = "Jawabanmu Benar!<br>Ini adalah bangun datar segi banyak.";
    r7.classList.add("text-success");
  } else {
    response = "Jawabanmu Salah!<br>Ini adalah bukan bangun datar segi banyak.";
    r7.classList.add("text-danger");
  }
  r7.innerHTML = response;

  if (g8.checked == jawabanBenar[7]) {
    response = "Jawabanmu Benar!<br>Ini adalah bukan bangun datar segi banyak.";
    r8.classList.add("text-success");
  } else {
    response = "Jawabanmu Salah!<br>Ini adalah bukan bangun datar segi banyak.";
    r8.classList.add("text-danger");
  }
  r8.innerHTML = response;
}

// // akhir latihan1

//Latihan 2
const benar = '<span style="color : green;">Benar</span>';
const salah = '<span style="color : red;">Salah</span>';

function cekBGambar1() {
  sgmbr1.checked = false;
  const cekGambar1 = document.querySelector(".cekGambar1");
  cekGambar1.innerHTML = benar;
}
function cekSGambar1() {
  bgmbr1.checked = false;
  const cekGambar1 = document.querySelector(".cekGambar1");
  cekGambar1.innerHTML = salah;
}



function cekBGambar2() {
  sgmbr2.checked = false;
  const cekGambar2 = document.querySelector(".cekGambar2");
  cekGambar2.innerHTML = benar;
}
function cekSGambar2() {
  bgmbr2.checked = false;
  const cekGambar2 = document.querySelector(".cekGambar2");
  cekGambar2.innerHTML = salah;
}

function cekSGambar3() {
  bgmbr3.checked = false;
  const cekGambar3 = document.querySelector(".cekGambar3");
  cekGambar3.innerHTML = salah;
}
function cekBGambar3() {
  sgmbr3.checked = false;
  const cekGambar3 = document.querySelector(".cekGambar3");
  cekGambar3.innerHTML = benar;
}

function cekBGambar4() {
  sgmbr4.checked = false;
  const cekGambar4 = document.querySelector(".cekGambar4");
  cekGambar4.innerHTML = benar;
}
function cekSGambar4() {
  bgmbr4.checked = false;
  const cekGambar4 = document.querySelector(".cekGambar4");
  cekGambar4.innerHTML = salah;
}

function cekSGambar5() {
  bgmbr5.checked = false;
  const cekGambar5 = document.querySelector(".cekGambar5");
  cekGambar5.innerHTML = salah;
}
function cekBGambar5() {
  sgmbr5.checked = false;
  const cekGambar5 = document.querySelector(".cekGambar5");
  cekGambar5.innerHTML = benar;
}

function cekBGambar6() {
  sgmbr6.checked = false;
  const cekGambar6 = document.querySelector(".cekGambar6");
  cekGambar6.innerHTML = benar;
}
function cekSGambar6() {
  bgmbr6.checked = false;
  const cekGambar6 = document.querySelector(".cekGambar6");
  cekGambar6.innerHTML = salah;
}

function cekBGambar7() {
  sgmbr7.checked = false;
  const cekGambar7 = document.querySelector(".cekGambar7");
  cekGambar7.innerHTML = benar;
}
function cekSGambar7() {
  bgmbr7.checked = false;
  const cekGambar7 = document.querySelector(".cekGambar7");
  cekGambar7.innerHTML = salah;
}

function cekBGambar8() {
  sgmbr8.checked = false;
  const cekGambar8 = document.querySelector(".cekGambar8");
  cekGambar8.innerHTML = benar;
}
function cekSGambar8() {
  bgmbr8.checked = false;
  const cekGambar8 = document.querySelector(".cekGambar8");
  cekGambar8.innerHTML = salah;
}

function cekSGambar9() {
  bgmbr9.checked = false;
  const cekGambar9 = document.querySelector(".cekGambar9");
  cekGambar9.innerHTML = salah;
}
function cekBGambar9() {
  sgmbr9.checked = false;
  const cekGambar9 = document.querySelector(".cekGambar9");
  cekGambar9.innerHTML = benar;
}

function cekBGambar10() {
  sgmbr10.checked = false;
  const cekGambar10 = document.querySelector(".cekGambar10");
  cekGambar10.innerHTML = benar;
}
function cekSGambar10() {
  bgmbr10.checked = false;
  const cekGambar10 = document.querySelector(".cekGambar10");
  cekGambar10.innerHTML = salah;
}

function cekYa() {
  const jawabcs1 = document.getElementById("jawabcs1");
  jawabcs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                        Jawaban Anda ${salah}<br>
                        <div class="pembahasan2">
                        <u>Pembahasan :</u>
                        </div>
                        Silahkan pilih jawaban yang benar
                        </div>`;
}

function cekTidak() {
  const jawabcs1 = document.getElementById("jawabcs1");
  jawabcs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                        Jawaban Anda ${benar}<br>
                        <div class="pembahasan2">
                        <u>Pembahasan :</u>
                        </div>
                        Tidak semua jawaban berbentuk segi banyak
                        </div>`;
}

// Akhir latihan 2

// // penjelasan

// Latihan 1
// let jawabanBenar = [false, true, true, false, false, true, true, false];

// function cekJawaban() {
//   const checkboxes = document.querySelectorAll(".checkbox-jawaban");
//   const results = document.querySelectorAll(".result");

//   checkboxes.forEach((checkbox, index) => {
//     const isJawabanBenar = checkbox.checked === jawabanBenar[index];
//     const response = isJawabanBenar ? "Jawabanmu Benar!<br>Ini adalah bangun segi banyak." : "Jawabanmu Salah!<br>Ini adalah bukan bangun segi banyak.";

//     results[index].innerHTML = response;
//     results[index].classList.add(isJawabanBenar ? "text-success" : "text-danger");
//   });
// }
