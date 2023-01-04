let output = '1';
for(let i = 2; i < 101; i++){
	let current = '';
	if((i % 3) && (i % 5)) current = i;
	else{
		if(!(i % 3)) current = "Fizz";
		if(!(i % 5)) current += "Buzz";
	}
	output += ", " + current;
}
console.log(output);