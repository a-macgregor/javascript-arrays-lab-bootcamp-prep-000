const app = "I don't do much.";

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(`${name}`);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(`${name}`);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  kittens = [kittens, ...];
  return kittens;
}

function prependKitten(name) {
  kittens = kittens.unshift(`${name}`);
  return kittens;
}
