const username = 'freddy';
typeof username === 'string';

if (!('serviceWorker' in navigator)) {
  console.log('old browser');
}

const greeting = 'hello';
console.log(`${greeting} world!`);
[1, 2, 3].forEach((x) => console.log(x));
