// Paginator
$(document).ready(function () {
    awalMateri();
  });
  function awalMateri(){
      document.getElementById("satu").hidden = false;
      document.getElementById("dua").hidden = true;
      document.getElementById("tiga").hidden = true;
      document.getElementById("empat").hidden = true;
      document.getElementById("lima").hidden = true;  
      
   };
   function satu(){
      document.getElementById("btnselanjutnya").classList.remove('disabled'); 
      document.getElementById("prev").hidden = true;
   
      document.getElementById("satu").hidden = false;
      document.getElementById("btnsatu").classList.add('pageAktif');
      document.getElementById("dua").hidden = true;
      document.getElementById("btndua").classList.remove('pageAktif');
      document.getElementById("tiga").hidden = true;
      document.getElementById("btntiga").classList.remove('pageAktif');
      document.getElementById("empat").hidden = true;
      document.getElementById("btnempat").classList.remove('pageAktif');
      document.getElementById("lima").hidden = true;
      document.getElementById("btnlima").classList.remove('pageAktif');
      
   
      document.getElementById("next").setAttribute( "onClick", "javascript: lima();" );
      
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
       document.getElementById("empat").hidden = true;
      document.getElementById("btnempat").classList.remove('pageAktif');
      document.getElementById("lima").hidden = true;
      document.getElementById("btnlima").classList.remove('pageAktif');
      
      
   
       document.getElementById("next").setAttribute( "onClick", "javascript: tiga();" );
       document.getElementById("prev").setAttribute( "onClick", "javascript: satu();" );
      
    }
    
    
    function tiga(){
      document.getElementById("btnsebelum").classList.remove('disabled'); 
      document.getElementById("btnselanjutnya").classList.remove('disabled');
      document.getElementById("prev").hidden = false;
      document.getElementById("next").hidden = false;
       
      document.getElementById("satu").hidden = true;
      document.getElementById("btnsatu").classList.remove('pageAktif');
      document.getElementById("dua").hidden = true;
      document.getElementById("btndua").classList.remove('pageAktif');
      document.getElementById("tiga").hidden = false;
      document.getElementById("btntiga").classList.add('pageAktif'); 
      document.getElementById("empat").hidden = true;
      document.getElementById("btnempat").classList.remove('pageAktif'); 
      document.getElementById("lima").hidden = true;
      document.getElementById("btnlima").classList.remove('pageAktif');
       
   
      document.getElementById("next").setAttribute( "onClick", "javascript: empat();" );
      document.getElementById("prev").setAttribute( "onClick", "javascript: dua();" );
      
    }
  
    function empat(){
      document.getElementById("btnsebelum").classList.remove('disabled'); 
      document.getElementById("btnselanjutnya").classList.remove('disabled');
      document.getElementById("prev").hidden = false;
      document.getElementById("next").hidden = false;
       
      document.getElementById("satu").hidden = true;
      document.getElementById("btnsatu").classList.remove('pageAktif');
      document.getElementById("dua").hidden = true;
      document.getElementById("btndua").classList.remove('pageAktif');
      document.getElementById("tiga").hidden = true;
      document.getElementById("btntiga").classList.remove('pageAktif'); 
      document.getElementById("empat").hidden = false;
      document.getElementById("btnempat").classList.add('pageAktif'); 
      document.getElementById("lima").hidden = true;
      document.getElementById("btnlima").classList.remove('pageAktif');
      
   
      document.getElementById("next").setAttribute( "onClick", "javascript: lima();" );
      document.getElementById("prev").setAttribute( "onClick", "javascript: tiga();" );
      
    }
  
    function lima(){
      document.getElementById("btnsebelum").classList.remove('disabled'); 
      
      document.getElementById("prev").hidden = false;
      document.getElementById("next").hidden = false;
       
      document.getElementById("satu").hidden = true;
      document.getElementById("btnsatu").classList.remove('pageAktif');
      document.getElementById("dua").hidden = true;
      document.getElementById("btndua").classList.remove('pageAktif');
      document.getElementById("tiga").hidden = true;
      document.getElementById("btntiga").classList.remove('pageAktif'); 
      document.getElementById("empat").hidden = true;
      document.getElementById("btnempat").classList.remove('pageAktif'); 
      document.getElementById("lima").hidden = false;
      document.getElementById("btnlima").classList.add('pageAktif');
      
   
      document.getElementById("btnselanjutnya").classList.add('disabled'); 
      document.getElementById("prev").setAttribute( "onClick", "javascript: empat();" );
      
      document.getElementById("prev").hidden = false;
      document.getElementById("next").hidden = true;
      document.getElementById("mnext").hidden = false;
    }
  
    