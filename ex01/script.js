let idades = []
let maiorIdade = 0
let posicaoMaiorIdade = -1

for (let i = 0; i < 4; i++) {
    idades[i] = parseInt(prompt("Digite a idade da " + (i + 1) +"ª pessoa:"))
    if (i === 0 || idades[i] > maiorIdade) {
        maiorIdade = idades[i];
        posicaoMaiorIdade = i
    }
}

console.log("Idades digitadas: "+ idades);
console.log("Maior idade digitada: ", +maiorIdade +" anos.")