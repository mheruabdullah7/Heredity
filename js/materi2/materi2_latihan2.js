
document.getElementById("form2").onsubmit=function() {
    drop1 = parseInt(document.getElementById("drop21").value);
    drop2 = parseInt(document.getElementById("drop22").value);
    drop3 = parseInt(document.getElementById("drop23").value);
    drop4 = parseInt(document.getElementById("drop24").value);
    drop5 = parseInt(document.getElementById("drop25").value);
    drop6 = parseInt(document.getElementById("drop26").value);
    drop7 = parseInt(document.getElementById("drop27").value);
    drop8 = parseInt(document.getElementById("drop28").value);
    drop9 = parseInt(document.getElementById("drop29").value);
    drop10 = parseInt(document.getElementById("drop210").value);
    


    result = drop1 + drop2 + drop3 + drop4 + drop5 + drop6 + drop7 + drop8 + drop9 + drop10;

 document.getElementById("grade2").innerHTML = result;





return false; // required to not refresh the page; just leave this here
} //this ends the submit function