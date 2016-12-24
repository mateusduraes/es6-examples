class Pessoa {
	constructor(nome, idade){
		this._nome = nome;
		this._idade = idade;
	}

	get nome(){
		return this._nome;
	}

	set nome(nome){
		this._nome = nome;
	}

	get idade(){
		return this._idade;
	}

	set idade(idade){
		this._idade = idade;
	}

	fala(mensagem){
		console.log(`${this._nome} diz: ${mensagem}`);
	}
}


let mateus = new Pessoa('Mateus', '22');
mateus.fala('E ae!');
console.log(`Propriedade nome = ${mateus.nome}`);
console.log(`Propriedade idade = ${mateus.idade}`);
console.log(`Alterando propriedades....`)
mateus.nome = 'mAtEus';
mateus.idade = 29;
console.log(`Propriedade nome = ${mateus.nome}`);
console.log(`Propriedade idade = ${mateus.idade}`);