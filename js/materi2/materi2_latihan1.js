
document.getElementById("form1").onsubmit=function() {
       drop1 = parseInt(document.getElementById("drop1").value);
       drop2 = parseInt(document.getElementById("drop2").value);
       drop3 = parseInt(document.getElementById("drop3").value);
       drop4 = parseInt(document.getElementById("drop4").value);
       drop5 = parseInt(document.getElementById("drop5").value);
       drop6 = parseInt(document.getElementById("drop6").value);
       drop7 = parseInt(document.getElementById("drop7").value);
       drop8 = parseInt(document.getElementById("drop8").value);
       drop9 = parseInt(document.getElementById("drop9").value);
       drop10 = parseInt(document.getElementById("drop10").value);
	   


	   result = drop1 + drop2 + drop3 + drop4 + drop5 + drop6 + drop7 + drop8 + drop9 + drop10;

	document.getElementById("grade").innerHTML = result;




return false; // required to not refresh the page; just leave this here
} //this ends the submit function