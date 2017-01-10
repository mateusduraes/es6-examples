//Creating strings by an template string with raw method.

const name = 'Mateus';
const lastname = 'Durães';

const fullname = String.raw`${name} ${lastname}`;
console.log(fullname);