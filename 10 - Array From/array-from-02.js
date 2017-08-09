const text = 'Mussum Ipsum, cacilds vidis litro abertis.';

const transformedText = 
    Array.from(text)
        .map((character, index) => index % 2 == 0 ? character.toUpperCase() : character.toLocaleLowerCase())
        .join('');

console.log(transformedText);