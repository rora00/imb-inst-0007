function checkNumbers(){
	var num1 = prompt("Enter first number", "2");
	var num2 = prompt("Enter second number", "2");
	
	const MIN = 1;
	const MAX = 20;
	
	var rand1 = Math.floor(Math.random() * (MAX-MIN) + 1) + MIN;
	var rand2 = Math.floor(Math.random() * (MAX-MIN) + 1) + MIN;
	
	if((num1 == rand1 && num2 == rand2) || (num1 == rand2 && num2 == rand1)){
		alert("You won £1000");
	}
	else if(num1 == rand1 || num2 == rand2 || num1 == rand2 || num2 == rand1){
		alert("You won £10");
	}
	else{
		alert("You won nothing");
	}
}
checkNumbers();