let nomes = []
let alturas = []
let continuar = true;
let contadorDePessoas = 0;

while (continuar) {
    nomes[contadorDePessoas] = prompt("Digite o nome da pessoa:");
    alturas[contadorDePessoas] = parseFloat(prompt("Digite a altura de " + nomes[contadorDePessoas]))
    contadorDePessoas++;

    let resposta = prompt("Deseja cadastrar outra pessoa? (S/N)").toUpperCase();
    if (resposta !== 'S') {
        continuar = false;
    }
}

let maiorAltura = alturas[0];
let nomeMaiorAltura = nomes[0];
let menorAltura = alturas[0]
let nomeMenorAltura = nomes[0]

for (let i = 1; i < contadorDePessoas; i++) {
    if(alturas[i] > maiorAltura) {
        maiorAltura = alturas[i];
        nomeMaiorAltura = nomes[i];
    }
    if(alturas[i] < menorAltura) {
        menorAltura = alturas[i];
        nomeMenorAltura = nomes[i];
    }
}

console.log("Resultados");
console.log("Maior altura: " + maiorAltura + "m e pertence a " + nomeMaiorAltura)
console.log("Menor altura: " + menorAltura + "m e pertence a " + nomeMenorAltura)