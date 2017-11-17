const person = {
    name: 'Mateus',
    age: 23
}

function showInfo({name, age}) {
    console.log(name, age);
}

showInfo(person);