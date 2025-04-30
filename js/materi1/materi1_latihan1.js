// mengisi kotak kosong
function cekJawaban() {
   let isian1 = document.querySelector("#isian1");
   let isian2 = document.querySelector("#isian2");
   let isian3 = document.querySelector("#isian3");
   let isian4 = document.querySelector("#isian4");
   let isian5 = document.querySelector("#isian5");
   let isian6 = document.querySelector("#isian6");
   let isian7 = document.querySelector("#isian7");
   let isian8 = document.querySelector("#isian8");
   let isian9 = document.querySelector("#isian9");
   let isian10 = document.querySelector("#isian10");
 
   if (isian1.value.replace(/\s/g, "") == "") {
     swal({
       title: "Jawaban Kamu masih kosong",
       icon: "warning",
     });
   } else if (isian1.value.replace(/\s/g, "") == "46") {
     isian1.classList.add("boxHijau");
   } else {
     isian1.classList.add("boxMerah");
   }
 
   if (isian2.value.replace(/\s/g, "") == "") {
     swal({
       title: "Jawaban Kamu masih kosong",
       icon: "warning",
     });
   } else if (isian2.value.replace(/\s/g, "") == "Y") {
     isian2.classList.add("boxHijau");
   } else {
     isian2.classList.add("boxMerah");
   }
 
   if (isian3.value.replace(/\s/g, "") == "") {
     swal({
       title: "Jawaban Kamu masih kosong",
       icon: "warning",
     });
   } else if (isian3.value.replace(/\s/g, "") == "XX") {
     isian3.classList.add("boxHijau");
   } else {
     isian3.classList.add("boxMerah");
   }
 
   if (isian4.value.replace(/\s/g, "") == "") {
     swal({
       title: "Jawaban Kamu masih kosong",
       icon: "warning",
     });
   } else if (isian4.value.replace(/\s/g, "") == "XY") {
     isian4.classList.add("boxHijau");
   } else {
     isian4.classList.add("boxMerah");
   }
 
   if (isian5.value.replace(/\s/g, "") == "") {
     swal({
       title: "Jawaban Kamu masih kosong",
       icon: "warning",
     });
   } else if (isian5.value.replace(/\s/g, "") == "22AAXX") {
     isian5.classList.add("boxHijau");
   } else {
     isian5.classList.add("boxMerah");
   }
 
   if (isian6.value.replace(/\s/g, "") == "") {
     swal({
       title: "Jawaban Kamu masih kosong",
       icon: "warning",
     });
   } else if (isian6.value.replace(/\s/g, "") == "22AAXYg") {
     isian6.classList.add("boxHijau");
   } else {
     isian6.classList.add("boxMerah");
   }
 
   if (isian7.value.replace(/\s/g, "") == "") {
     swal({
       title: "Jawaban Kamu masih kosong",
       icon: "warning",
     });
   } else if (isian7.value.replace(/\s/g, "") == "22AX") {
     isian7.classList.add("boxHijau");
   } else {
     isian7.classList.add("boxMerah");
   }
 
   if (isian8.value.replace(/\s/g, "") == "") {
     swal({
       title: "Jawaban Kamu masih kosong",
       icon: "warning",
     });
   } else if (isian8.value.replace(/\s/g, "") == "22AY") {
     isian8.classList.add("boxHijau");
   } else {
     isian8.classList.add("boxMerah");
   }

   if (isian9.value.replace(/\s/g, "") == "") {
      swal({
        title: "Jawaban Kamu masih kosong",
        icon: "warning",
      });
    } else if (isian9.value.replace(/\s/g, "") == "22AX") {
      isian9.classList.add("boxHijau");
    } else {
      isian9.classList.add("boxMerah");
    }

    if (isian10.value.replace(/\s/g, "") == "") {
      swal({
        title: "Jawaban Kamu masih kosong",
        icon: "warning",
      });
    } else if (isian10.value.replace(/\s/g, "") == "22AY") {
      isian10.classList.add("boxHijau");
    } else {
      isian10.classList.add("boxMerah");
    }
 }

 
 
 function cekUlang() {
   let isian1 = document.querySelector("#isian1");
   let isian2 = document.querySelector("#isian2");
   let isian3 = document.querySelector("#isian3");
   let isian4 = document.querySelector("#isian4");
   let isian5 = document.querySelector("#isian5");
   let isian6 = document.querySelector("#isian6");
   let isian7 = document.querySelector("#isian7");
   let isian8 = document.querySelector("#isian8");
   let isian9 = document.querySelector("#isian9");
   let isian10 = document.querySelector("#isian10");
 
   // document.getElementsByClassName(jawab1)[0].value = "";
   document.querySelector("#isian1").value = "";
   isian1.classList.remove("boxHijau");
   isian1.classList.remove("boxMerah");
 
   document.querySelector("#isian2").value = "";
   isian2.classList.remove("boxHijau");
   isian2.classList.remove("boxMerah");
 
   document.querySelector("#isian3").value = "";
   isian3.classList.remove("boxHijau");
   isian3.classList.remove("boxMerah");
 
   document.querySelector("#isian4").value = "";
   isian4.classList.remove("boxHijau");
   isian4.classList.remove("boxMerah");
 
   document.querySelector("#isian5").value = "";
   isian5.classList.remove("boxHijau");
   isian5.classList.remove("boxMerah");
 
   document.querySelector("#isian6").value = "";
   isian6.classList.remove("boxHijau");
   isian6.classList.remove("boxMerah");
 
   document.querySelector("#isian7").value = "";
   isian7.classList.remove("boxHijau");
   isian7.classList.remove("boxMerah");
 
   document.querySelector("#isian8").value = "";
   isian8.classList.remove("boxHijau");
   isian8.classList.remove("boxMerah");

   document.querySelector("#isian9").value = "";
   isian8.classList.remove("boxHijau");
   isian8.classList.remove("boxMerah");

   document.querySelector("#isian10").value = "";
   isian8.classList.remove("boxHijau");
   isian8.classList.remove("boxMerah");
 }
 