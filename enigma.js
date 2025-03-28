class Enigma {
    constructor(rotors, reflector) {
      this.rotors = rotors;
      this.reflector = reflector;
    }
  
    processLetter(letter) {
      if (!/[A-Z]/.test(letter)) return letter;
  
      this.rotors.forEach(rotor => rotor.rotate());
  
      let processedLetter = letter;
      for (const rotor of this.rotors) {
        processedLetter = rotor.forward(processedLetter);
      }
  
      processedLetter = this.reflector.reflect(processedLetter);
  
      for (let i = this.rotors.length - 1; i >= 0; i--) {
        processedLetter = this.rotors[i].backward(processedLetter);
      }
  
      return processedLetter;
    }
  
    encode_and_decode(message) {
      return message.toUpperCase().split('').map(letter => {
        return this.processLetter(letter);
      }).join('');
    }
}
  
module.exports = Enigma;