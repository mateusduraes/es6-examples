class Animal {
	constructor(name, weigth){
		this._name = name;
		this._weigth = weigth;
	}

	get name(){
		return this._name;
	}

	set name(name){
		this._name = name;
	}

	
	get weigth(){
		return this._weigth;
	}

	set weigth(weigth){
		this._weigth = weigth;
	}

	say(msg){
		console.log(msg);
	}
}

class Dog extends Animal {
	constructor(name, weigth){
		super(name, weigth);
		this.say(`Hello, i have born right now, my name is ${this._name} and my weigth is ${this._weigth} `);
	}
}


let dog = new Dog('Chi', 1);