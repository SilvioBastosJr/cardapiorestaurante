import produtos from '../dadosCardapio/dados.js';

export const exibirEntrada = (entrada) => {
    return produtos.filter((produto) => produto.categoria === entrada)
};

export const filtrarPrato = (categoria) => {
    return produtos.filter((produto) => produto.categoria === categoria)
};

export const buscarPrato = (textoDigitado) => {
    produtos.filter((produto) => {
        return (
            produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
            produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
        )
    })
};