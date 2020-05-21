function showMessage(){
	var myName = "Rohit";
	alert("Thank you for pressing the button");
	alert(myName);
	prettify();
}

function prettify(){
	var par = document.getElementById("text");
	par.innerHTML = "this is my modified paragraph";
	par.style.fontSize = "30pt"
	par.style.color = "red"
}

