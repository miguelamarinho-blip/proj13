let nomes = []
let sexos = []
let salario = []

for(let i = 0; i < 5; i++) {
    nomes[i] = prompt("Digite o nome do " + (i + 1) + "º funcionário");
    sexos[i] = prompt("Digite o sexo de  " + nomes[i] + "\nM - Masculino \nF - Feminino").toUpperCase();
    salario[i] = parseFloat(prompt("Digite o salário de " + nomes[i] + ";"));
}

console.log("funcionárias mulheres que ganham mais de R$5 mil.");
let encontrouMulherRica = false;

for(let i = 0; i < 5; i++) {
    if (sexos[i] === 'F' && salario[i] > 5000) {
        console.log("Nome: " + nomes[i] + " | Salário: R$ " + salario[i].toFixed(2));
        encontrouMulherRica = true;
    }
}

if(!encontrouMulherRica) {
    console.log("Nenhuma funcionária preenche os requisitos.");
}