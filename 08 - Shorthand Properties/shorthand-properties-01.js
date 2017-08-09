const name = 'Mateus';
const age = '23';
const country = 'Brazil';


const es5Person = {
    name: name,
    age: age,
    country: country
};

console.log(es5Person);

const es6Person = {
    name,
    age,
    country
};

console.log(es6Person);