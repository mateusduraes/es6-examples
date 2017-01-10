function sum(...values){
	return values.reduce((a, b)=>	a + b);	
}

console.log(sum(2,2,2));
// The arguments have transformed to an array inside the function 'sum'.