class Plugboard {
    constructor(connections = {}) {
        this.mapping = this.createMapping(connections);
    }
  
    createMapping(connections) {
        const mapping = {};
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        
        for (const letter of alphabet) {
            mapping[letter] = letter;
        }
        
        for (const [from, to] of Object.entries(connections)) {
            if (from !== to) {
                mapping[from] = to;
                mapping[to] = from;
            }
        }
        return mapping;
    }
    
    process(letter) {
        return this.mapping[letter] || letter;
    }
}
  
module.exports = Plugboard;