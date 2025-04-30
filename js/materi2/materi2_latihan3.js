
document.getElementById("form3").onsubmit=function() {
    drop1 = parseInt(document.getElementById("drop31").value);
    drop2 = parseInt(document.getElementById("drop32").value);
    drop3 = parseInt(document.getElementById("drop33").value);
    drop4 = parseInt(document.getElementById("drop34").value);
    drop5 = parseInt(document.getElementById("drop35").value);
    drop6 = parseInt(document.getElementById("drop36").value);
    drop7 = parseInt(document.getElementById("drop37").value);
    drop8 = parseInt(document.getElementById("drop38").value);
    drop9 = parseInt(document.getElementById("drop39").value);
    drop10 = parseInt(document.getElementById("drop310").value);
    


    result = drop1 + drop2 + drop3 + drop4 + drop5 + drop6 + drop7 + drop8 + drop9 + drop10;

 document.getElementById("grade3").innerHTML = result;





return false; // required to not refresh the page; just leave this here
} //this ends the submit function