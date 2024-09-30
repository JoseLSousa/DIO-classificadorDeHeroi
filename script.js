class heroi {
    constructor(nome, xp) {
        this.nome = nome;
        this.xp = xp;
    }
    apresentar() {
        let nivel = "0";
        if (this.xp <= 1000) {
            nivel = "Ferro";
        } else if (this.xp > 1000 && this.xp <= 2000) {
            nivel = "Bronze";
        } else if (this.xp > 2000 && this.xp <= 5000) {
            nivel = "Prata"
        } else if (this.xp > 5000 && this.xp <= 7000) {
            nivel = "Ouro"
        } else if (this.xp > 7000 && this.xp <= 8000) {
            nivel = "Platina"
        } else if (this.xp > 8000 && this.xp <= 9000) {
            nivel = "Ascendente"
        } else if (this.xp > 9000 && this.xp <= 10000) {
            nivel = "Imortal"
        } else if (this.xp >= 10001) {
            nivel = "Radiante"
        }
        console.log(`Meu nome é ${this.nome} e eu sou um heroi com nível ${nivel}`)
    }
}

h1 = new heroi("Joãozinho Voador", 7500);

h1.apresentar();