
 // Dados da loja
const nomeLoja = "RonnickGames";

const RonnickGames = [
    { nome: "GTA 6", categoria: "mundo aberto", preco: 400, quantidade: 4, vendidos: 5 },
    { nome: "Dark Souls", categoria: "Soulslike", preco: 100, quantidade: 10, vendidos: 20 },
    { nome: "FIFA27", categoria: "esportes", preco: 350, quantidade: 2, vendidos: 10 },
    { nome: "Minecraft", categoria: "mundo aberto", preco: 50, quantidade: 8, vendidos: 100 },
    { nome: "Resident Evil Requiem", categoria: "terror", preco: 400, quantidade: 6, vendidos: 40 },
    { nome: "Terraria", categoria: "mundo aberto", preco: 25, quantidade: 10, vendidos: 200 }
];

// Tarefa 2 - Listar produtos
function listarProdutos(lista) {
    console.log("\n--- TAREFA 2: LISTAR ---");

    for (let i = 0; i < lista.length; i++) {
        console.log(
            `${i + 1}. ${lista[i].nome} | ${lista[i].categoria} | R$ ${lista[i].preco} | ${lista[i].quantidade} un. | ${lista[i].vendidos} vendidos`
        );
    }
}

// Tarefa 3 - Cadastrar produto

function cadastrarProduto(lista, nome, categoria, preco, quantidade) {
    const produto = {
        nome: formatarNome(nome),
        categoria: categoria,
        preco: preco,
        quantidade: quantidade,
        vendidos: 0
    };

    lista.push(produto);

    return lista.length;
}


// Tarefa 4 - Calcular valor do estoque

function calcularValorEstoque(lista) {
    let valor = 0;

    for (let i = 0; i < lista.length; i++) {
        valor += lista[i].preco * lista[i].quantidade;
    }

    return valor;
}


// Tarefa 5 - Buscar produto
function buscarProduto(lista, termo) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].nome.toLowerCase().includes(termo.toLowerCase())) {
            return lista[i];
        }
    }

    return null;
}

// Tarefa 6 - Produtos em falta
function produtosEmFalta(lista, minimo) {
    const produtosFaltando = [];

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].quantidade < minimo) {
            produtosFaltando.push(lista[i]);
        }
    }

    return produtosFaltando;
}

// Tarefa 7 - Aplicar desconto
function aplicarDesconto(lista, categoria, percentual) {
    let contador = 0;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].categoria === categoria) {
            lista[i].preco -= lista[i].preco * percentual / 100;
            contador++;
        }
    }

    return contador;
}

// Tarefa 8 - Registrar venda
function registrarVenda(lista, nome, quantidade) {
    const produto = buscarProduto(lista, nome);

    if (produto === null || quantidade <= 0 || produto.quantidade < quantidade) {
        return false;
    }

    produto.quantidade -= quantidade;
    produto.vendidos += quantidade;

    return true;
}

// Tarefa 9 - Formatar nome
function formatarNome(texto) {
    texto = texto.trim();

    if (texto.length === 0) {
        return "";
    }

    return texto[0].toUpperCase() + texto.slice(1).toLowerCase();
}

// Tarefa 10 - Converter array para JSON
function converterParaJSON(lista) {
    return JSON.stringify(lista);
}

// Tarefa 10 - Recuperar array do JSON
function lerJSON(texto) {
    return JSON.parse(texto);
}

// Tarefa 11 - Gerar relatório
function gerarRelatorio(nome, lista) {
    const valorTotal = calcularValorEstoque(lista);
    const estoqueBaixo = produtosEmFalta(lista, 5);

    console.log(`\n===== RELATÓRIO: ${nome.toUpperCase()} =====`);
    console.log(`Produtos cadastrados: ${lista.length}`);
    console.log(`Valor total em estoque: R$ ${valorTotal}`);
    console.log(`Produtos com estoque baixo: ${estoqueBaixo.length}`);

    for (let i = 0; i < estoqueBaixo.length; i++) {
        console.log(
            `- ${estoqueBaixo[i].nome} (${estoqueBaixo[i].quantidade} un.)`
        );
    }
}

// ================================
// PROGRAMA PRINCIPAL
// ================================

// Tarefa 2 - Listar
listarProdutos(RonnickGames);

// Tarefa 3 - Cadastrar
console.log("\n--- TAREFA 3: CADASTRAR ---");

const total = cadastrarProduto(
    RonnickGames,
    "God of War",
    "ação",
    100,
    20
);

console.log(`Produto cadastrado! Agora a loja tem ${total} produtos.`);

// Tarefa 4 - Valor do estoque
console.log("\n--- TAREFA 4: VALOR DO ESTOQUE ---");
console.log(`Valor do estoque: R$ ${calcularValorEstoque(RonnickGames)}`);

// Tarefa 5 - Buscar
console.log("\n--- TAREFA 5: BUSCAR ---");

const resultado1 = buscarProduto(RonnickGames, "MINECRAFT");

if (resultado1 !== null) {
    console.log(`Encontrado: ${resultado1.nome} - R$ ${resultado1.preco}`);
} else {
    console.log("Produto não encontrado.");
}

const resultado2 = buscarProduto(RonnickGames, "LOL");

if (resultado2 !== null) {
    console.log(`Encontrado: ${resultado2.nome} - R$ ${resultado2.preco}`);
} else {
    console.log("Produto não encontrado.");
}

// Tarefa 6 - Produtos em falta
console.log("\n--- TAREFA 6: EM FALTA ---");

const faltando = produtosEmFalta(RonnickGames, 5);

console.log(`Produtos com menos de 5 unidades: ${faltando.length}`);

// Tarefa 7 - Desconto
console.log("\n--- TAREFA 7: DESCONTO ---");

const quantidadeAlterada = aplicarDesconto(RonnickGames, "Soulslike", 10);

console.log(`${quantidadeAlterada} produtos receberam desconto.`);

const descontos = buscarProduto(RonnickGames, "dark souls");

if (descontos !== null) {
    console.log(`Novo preço do ${descontos.nome}: R$ ${descontos.preco}`);
} else {
    console.log("Produto não encontrado.");
}

// Tarefa 8 - Registrar venda
console.log("\n--- TAREFA 8: REGISTRAR VENDA ---");

const sucesso = registrarVenda(RonnickGames, "Dark Souls", 3);

if (sucesso === true) {
    const produto = buscarProduto(RonnickGames, "Dark Souls");

    console.log(
        `Venda realizada! ${produto.nome}: ${produto.quantidade} un. em estoque, ${produto.vendidos} vendidos.`
    );
} else {
    console.log("Venda não realizada: estoque insuficiente ou produto inexistente.");
}

// Tentativa de vender mais unidades do que existem
const segundaVenda = registrarVenda(RonnickGames, "FIFA27", 100);

if (segundaVenda === true) {
    const produto = buscarProduto(RonnickGames, "FIFA27");

    console.log(
        `Venda realizada! ${produto.nome}: ${produto.quantidade} un. em estoque, ${produto.vendidos} vendidos.`
    );
} else {
    console.log("Venda não realizada: estoque insuficiente ou produto inexistente.");
}

// Tarefa 9 - Formatar nome
console.log("\n--- TAREFA 9: FORMATAR NOME ---");
console.log(formatarNome("   tERRARIA   "));

// Tarefa 10 - JSON
console.log("\n--- TAREFA 10: JSON ---");

const textoJSON = converterParaJSON(RonnickGames);

console.log(typeof textoJSON);

const produtosRecuperados = lerJSON(textoJSON);

console.log(
    `Itens recuperados: ${produtosRecuperados.length} | Primeiro: ${produtosRecuperados[0].nome}`
);

// Tarefa 11 - Relatório final
console.log("\n--- TAREFA 11: RELATÓRIO ---");

gerarRelatorio(nomeLoja, RonnickGames);
