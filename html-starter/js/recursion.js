function calculate(){
	base = baseInput.value;
	power = powerInput.value;
	answer.innerHTML = "raiseToPower(" + base +", " + power + ") = " + raiseToPower(base, power);
}

function raiseToPower(base, power){
	if(power == 0) return 1;
	return base*raiseToPower(base, power - 1);
}