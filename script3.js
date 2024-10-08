let carros = []
let continuar = true


while (continuar) {
    let carro = {
    modelo: "",
    marca: "",
    ano: 0,
    valor: 0
  }

  
  carro.modelo = prompt('Digite o modelo do carro: ')
  carro.marca = prompt('Digite a marca do carro: ')
  carro.ano = prompt('Digite o ano do carro: ')
  carro.valor = parseFloat(prompt('Digite o valor do carro: '))

  carros.push(carro);

  
  let resposta = prompt('Deseja adicionar mais um carro? Digite "sim" para continuar ou "não" para parar.')

  if (resposta !== "sim") {
    continuar = false;
  }
}

let carromaior = carros[0]

for (let i = 1; i < carros.length; i++) {
  if (carros[i].valor > carromaior.valor) {
    carromaior = carros[i];
  }
}

console.log("O carro mais caro é:");
console.log(`Modelo: ${carromaior.modelo}`);
console.log(`Marca: ${carromaior.marca}`);
console.log(`Ano: ${carromaior.ano}`);
console.log(`Valor: R$ ${carromaior.valor.toFixed(2)}`);