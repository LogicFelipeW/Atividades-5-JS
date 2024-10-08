let livro = {
  nome: "",
  autor: "",
  ano: ""
}

livro.nome = prompt('Digite o nome do primeiro livro: ')
livro.autor = prompt('Digite o nome do autor do primeiro livro: ')
livro.ano = prompt('Digite o ano de publicação do primeiro livro: ')

let livro2 = {
  nome: "",
  autor: "",
  ano: ""
}

livro2.nome = prompt('Digite o nome do segundo livro: ')
livro2.autor = prompt('Digite o nome do autor do segundo livro: ')
livro2.ano = prompt('Digite o ano de publicação do segundo livro: ')


if (livro.ano < livro2.ano) {
  console.log(`O livro mais antigo é: ${livro.nome}`)
} else if (livro2.ano < livro.ano) {
  console.log(`O livro mais antigo é: ${livro2.nome}`)
} else {
  console.log("Os dois livros foram publicados no mesmo ano.")
}


if (livro.nome === "estudando programação" || livro2.nome === "estudando programação") {
  console.log("SIM")
} else {
  console.log("NÃO, não existe nenhum livro chamado 'Estudando programação'.")
}


if (livro.autor === livro2.autor) {
  console.log(`Os dois livros são do mesmo autor: ${livro.autor}`)
} else {
  console.log(`Os livros têm autores diferentes. Autor do primeiro livro: ${livro.autor}, Autor do segundo livro: ${livro2.autor}`)
}
