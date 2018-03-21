const app = "I don't do much.";

var kittens = ['Milo', 'Otis', 'Garfield'];

//1 
function destructivelyAppendKitten(name) {
  kittens.push(`${name}`);
  return kittens;
}

//2 
function destructivelyPrependKitten(name) {
  kittens.unshift(`${name}`);
  return kittens;
}

//3 
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

//4 
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

//5
function appendKitten(name) {
  var kittens = [...kittens, `${name}`];
  return kittens;
}

//6 
function prependKitten(name) {
  kittens = kittens.unshift(`${name}`);
  return kittens;
}
