function printNames(firstName, secondName){
	console.log(`firstName: ${firstName}, secondName: ${secondName}`);
};
let names = ['mateus', 'duraes'];

printNames(...names);
