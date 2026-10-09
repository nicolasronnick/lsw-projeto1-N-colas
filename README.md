# Minha Loja - RonnickGames

**Aluno:** Nícolas Ronnick da Silva Soares - 202612010008

## Como executar

No terminal do VS Code, execute o comando:

```bash
node loja.js
```

## Funcionalidades

- **`listarProdutos(lista)`**: lista todos os produtos cadastrados, exibindo nome, categoria, preço, quantidade em estoque e unidades vendidas.

- **`cadastrarProduto(lista, nome, categoria, preco, quantidade)`**: cadastra um novo produto, adicionando-o ao array com a quantidade de vendas inicial igual a zero.

- **`calcularValorEstoque(lista)`**: calcula e retorna o valor total do estoque, multiplicando o preço pela quantidade de cada produto.

- **`buscarProduto(lista, termo)`**: busca um produto pelo nome ou por parte dele, ignorando diferenças entre letras maiúsculas e minúsculas.

- **`produtosEmFalta(lista, minimo)`**: retorna uma lista dos produtos que possuem quantidade em estoque inferior ao mínimo informado.

- **`aplicarDesconto(lista, categoria, percentual)`**: aplica um desconto percentual aos produtos de uma categoria específica e retorna a quantidade de produtos alterados.

- **`registrarVenda(lista, nome, quantidade)`**: registra uma venda, atualizando a quantidade em estoque e o total de unidades vendidas. Retorna `true` se a venda for realizada e `false` caso contrário.

- **`formatarNome(texto)`**: remove espaços desnecessários no início e no fim e padroniza o texto, deixando a primeira letra maiúscula e as demais minúsculas.

- **`converterParaJSON(lista)`**: converte a lista de produtos em um texto JSON utilizando `JSON.stringify()`.

- **`lerJSON(texto)`**: recupera os dados do texto JSON e os transforma novamente em uma estrutura JavaScript utilizando `JSON.parse()`.

- **`gerarRelatorio(nome, lista)`**: gera um relatório com o nome da loja em maiúsculas, a quantidade de produtos cadastrados, o valor total do estoque e a lista de produtos com estoque baixo.
