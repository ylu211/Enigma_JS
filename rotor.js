class Rotor {
    constructor(wiring, initialPosition = 0) {
        this.wiring = wiring;
        this.position = initialPosition;
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.createMappings();
    }
  
    createMappings() {
        this.inverseWiring = new Array(26);
        for (let i = 0; i < 26; i++) {
            const outputLetter = this.wiring[i];
            const outputIndex = this.alphabet.indexOf(outputLetter);
            this.inverseWiring[outputIndex] = this.alphabet[i];
        }
    }
  
    forward(letter) {
        const index = (this.alphabet.indexOf(letter) + this.position) % 26;
        const encryptedIndex = this.alphabet.indexOf(this.wiring[index]);
        return this.alphabet[(encryptedIndex - this.position + 26) % 26];
    }
  
    backward(letter) {
        const index = (this.alphabet.indexOf(letter) + this.position) % 26;
        const encryptedLetter = this.inverseWiring[index];
        const encryptedIndex = this.alphabet.indexOf(encryptedLetter);
        return this.alphabet[(encryptedIndex - this.position + 26) % 26];
    }
  
    rotate() {
        this.position = (this.position + 1) % 26;
    }
  
    setPosition(pos) {
        this.position = pos % 26;
    }
}
  
module.exports = Rotor;