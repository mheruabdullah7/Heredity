// Paginator
window.onload = function awalMateri(){
    document.getElementById("satu").hidden = false;
    document.getElementById("dua").hidden = true;
    document.getElementById("tiga").hidden = true;
      
 };
 function satu(){
    document.getElementById("btnsebelum").classList.add('disabled'); 
    document.getElementById("btnselanjutnya").classList.remove('disabled'); 
    document.getElementById("prev").hidden = true;
 
 
    document.getElementById("satu").hidden = false;
    document.getElementById("btnsatu").classList.add('pageAktif');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('pageAktif');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('pageAktif');
    
 
    document.getElementById("next").setAttribute( "onClick", "javascript: dua();" );
    
  }
  
  function dua(){
     document.getElementById("btnsebelum").classList.remove('disabled'); 
     document.getElementById("btnselanjutnya").classList.remove('disabled');
     document.getElementById("prev").hidden = false;
     document.getElementById("next").hidden = false;
      
     document.getElementById("satu").hidden = true;
     document.getElementById("btnsatu").classList.remove('pageAktif');
     document.getElementById("dua").hidden = false;
     document.getElementById("btndua").classList.add('pageAktif');
     document.getElementById("tiga").hidden = true;
     document.getElementById("btntiga").classList.remove('pageAktif'); 
     
 
     document.getElementById("next").setAttribute( "onClick", "javascript: tiga();" );
     document.getElementById("prev").setAttribute( "onClick", "javascript: satu();" );
    
  }
  
  
  function tiga(){
    document.getElementById("btnsebelum").classList.remove('disabled'); 
    
    document.getElementById("prev").hidden = false;
    document.getElementById("next").hidden = false;
     
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('pageAktif');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('pageAktif');
    document.getElementById("tiga").hidden = false;
    document.getElementById("btntiga").classList.add('pageAktif'); 
    
     
 
    document.getElementById("btnselanjutnya").classList.add('disabled'); 
    document.getElementById("prev").setAttribute( "onClick", "javascript: dua();" );
 
    document.getElementById("prev").hidden = false;
    document.getElementById("next").hidden = true;
    document.getElementById("mnext").hidden = false;
    
  }
  
  