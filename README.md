#Minha Loja - RonnickGames

Aluno(a): Nícolas Ronnick da Silva Soares - 202612010008

Como executar: node loja.js

listarProdutos(lista)

Exibe todos os produtos cadastrados, incluindo nome, categoria, preço, quantidade em estoque e unidades vendidas.

cadastrarProduto(lista, nome, categoria, preco, quantidade)

Cadastra um novo produto, formata seu nome e inicializa a quantidade de vendas em zero.

calcularValorEstoque(lista)

Calcula e retorna o valor total do estoque, multiplicando o preço pela quantidade de cada produto.

buscarProduto(lista, termo)

Procura um produto pelo nome, ignorando diferenças entre letras maiúsculas e minúsculas, e retorna o produto encontrado ou null.

produtosEmFalta(lista, minimo)

Retorna um novo array contendo os produtos cuja quantidade em estoque é inferior ao mínimo informado.

aplicarDesconto(lista, categoria, percentual)

Aplica um desconto percentual aos produtos de uma categoria específica e retorna a quantidade de produtos alterados.

registrarVenda(lista, nome, quantidade)

Registra uma venda, atualiza o estoque e a quantidade de unidades vendidas. Retorna true se a venda for realizada ou false caso contrário.

formatarNome(texto)

Remove espaços no início e no fim do texto e transforma a primeira letra em maiúscula e as demais em minúsculas.

converterParaJSON(lista)

Converte o array de produtos em uma string no formato JSON usando JSON.stringify().

lerJSON(texto)

Converte um texto JSON de volta para uma estrutura JavaScript usando JSON.parse().

gerarRelatorio(nome, lista)

Exibe o relatório da loja com o nome em maiúsculas, a quantidade de produtos, o valor total do estoque e a lista de produtos com estoque baixo.
