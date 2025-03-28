class Reflector {
    constructor(wiring) {
      this.wiring = wiring;
      this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
  
    reflect(letter) {
      const index = this.alphabet.indexOf(letter);
      return index === -1 ? letter : this.wiring[index];
    }
  }
  
  module.exports = Reflector;