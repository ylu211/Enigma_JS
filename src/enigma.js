class Enigma {
    constructor(rotors, reflector, plugboard = null) {
        this.rotors = rotors;
        this.reflector = reflector;
        this.plugboard = plugboard;
    }
  
    processLetter(letter) {
        if (!/[A-Z]/.test(letter)) return letter;

        let processedLetter = this.plugboard ? this.plugboard.process(letter) : letter;

        this.rotors.forEach(rotor => rotor.rotate());
    
        for (const rotor of this.rotors) {
            processedLetter = rotor.forward(processedLetter);
        }
    
        processedLetter = this.reflector.reflect(processedLetter);
    
        for (let i = this.rotors.length - 1; i >= 0; i--) {
            processedLetter = this.rotors[i].backward(processedLetter);
        }
    
        processedLetter = this.plugboard ? this.plugboard.process(processedLetter) : processedLetter;

        return processedLetter;
    }
    
    encode_and_decode(message) {
        return message.toUpperCase().split('').map(letter => {
            return this.processLetter(letter);
        }).join('');
    }
}
  
module.exports = Enigma;