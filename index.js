const Rotor = require('./rotor');
const Reflector = require('./reflector');
const Enigma = require('./enigma');

const rotor1 = new Rotor('EKMFLGDQVZNTOWYHXUSPAIBRCJ', 0);
const rotor2 = new Rotor('AJDKSIRUXBLHWTMCQGZNPYFVOE', 0);
const rotor3 = new Rotor('BDFHJLCPRTXVZNYEIWGAKMUSQO', 0);

const reflectorB = new Reflector('YRUHQSLDPXNGOKMIEBFZCWVJAT');

const enigma = new Enigma([rotor1, rotor2, rotor3], reflectorB);

const message = 'Cryptographie avancée';
console.log('Original:', message);

const encoded = enigma.encode_and_decode(message);
console.log('Encodé:', encoded);

[rotor1, rotor2, rotor3].forEach(r => r.setPosition(0));
const decoded = enigma.encode_and_decode(encoded);
console.log('Décodé:', decoded);