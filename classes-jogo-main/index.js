// Classe 'heroi' que possui as características de nome, idade e tipo
class personagem{
    constructor (nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    }

    // Método 'atacar' que usa estrutura de decisão 'if-else if' para definir a maneira de atacar de cada tipo de personagem
    atacar(){
        let ataque
        if (this.tipo === "mago"){
            ataque = "magia";
        } else if (this.tipo === "guerreiro"){
            ataque = "espada";
        } else if (this.tipo === "monge"){
            ataque = "artes marciais";
        } else if (this.tipo === "ninja"){
            ataque = "shuriken";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Array de personagens
let personagens = [
    new personagem("Balthazar Blake:", "1850 anos", "mago"),
    new personagem("Berserk", "35 anos", "guerreiro"),
    new personagem("Isaac netero", "105 anos", "monge"),
    new personagem("Shinobi", "42 anos", "ninja")
];

// Laço de repetição 'for-of' que percorre o array 'personagens' e chama o método 'atacar' para cada um dos personagens 
for (let personagem of personagens) {
    personagem.atacar();
}