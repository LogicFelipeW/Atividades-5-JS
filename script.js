let pessoa = {
    nome: "Joao",
    idade: "17",
    cidade: "patrocinio",
  }

  let num = parseFloat(prompt('Deseja atualizar algo? (1 para idade e 2 para cidade)'))

  if(num === 1){
    pessoa.idade = prompt('Qual a nova idade da pessoa?')
    console.log(`Seu nome é ${pessoa.nome}, Sua idade é ${pessoa.idade}, na cidade ${pessoa.cidade}`)

  }else if (num === 2){
    pessoa.cidade = prompt('Qual a nova cidade que deseja?')
    console.log(`Seu nome é ${pessoa.nome}, Sua idade é ${pessoa.idade}, na cidade ${pessoa.cidade}`)
  }else{
    console.log('Opção inválida')
  }

  
  
