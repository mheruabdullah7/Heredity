
document.getElementById("form4").onsubmit=function() {
    drop1 = parseInt(document.getElementById("drop41").value);
    drop2 = parseInt(document.getElementById("drop42").value);
    drop3 = parseInt(document.getElementById("drop43").value);
    drop4 = parseInt(document.getElementById("drop44").value);
    drop5 = parseInt(document.getElementById("drop45").value);
    drop6 = parseInt(document.getElementById("drop46").value);
    drop7 = parseInt(document.getElementById("drop47").value);
    drop8 = parseInt(document.getElementById("drop48").value);
    drop9 = parseInt(document.getElementById("drop49").value);
    drop10 = parseInt(document.getElementById("drop410").value);
    


    result = drop1 + drop2 + drop3 + drop4 + drop5 + drop6 + drop7 + drop8 + drop9 + drop10;

 document.getElementById("grade4").innerHTML = result;





return false; // required to not refresh the page; just leave this here
} //this ends the submit function