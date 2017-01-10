class Person {
	constructor(name, age){
		this._name = name;
		this._age = age;
	}

	get name(){
		return this._name;
	}

	set name(name){
		this._name = name;
	}

	get age(){
		return this._age;
	}

	set age(age){
		this._age = age;
	}

	speak(msg){
		console.log(`${this._name} says: ${msg}`);
	}
}


let mateus = new Person('Mateus', '22');
mateus.speak('Hello!');
console.log(`Name Propertie = ${mateus.name}`);
console.log(`Age Propertie = ${mateus.age}`);
console.log(`Changing properties..`)
mateus.name = 'mAtEus';
mateus.age = 29;
console.log(`Name Propertie = ${mateus.name}`);
console.log(`Age Propertie = ${mateus.age}`);