import Topo from '../Topo/topo';
import Card from '../Card/card';

import produtos from '../dadosCardapio/dados.js';

import './principal.css';

import entrada from '../assets/entrada.png';
import massa from '../assets/massa.png';
import carne from '../assets/carne.png';
import bebidas from '../assets/bebidas.png';
import salada from '../assets/salada.png';
import sobremesa from '../assets/sobremesa.png';

import { IoSearch } from "react-icons/io5";
import { useState } from 'react';

export default function Principal() {

  const exibirEntrada = (entradas) => {
    
  return produtos.filter((produto) => produto.categoria === entradas);
};

  const [categoriaCardapio, setCategoriaCardapio] = useState(exibirEntrada("Entradas"));

  const [textoBusca, setTextoBusca] = useState("");

  const filtrarPrato = (categoria) => {

    setCategoriaCardapio(
     produtos.filter((produto) => produto.categoria === categoria)
    )
    setTextoBusca("");
  };

  const buscarJogo = (textoDigitado) => {
    
    setTextoBusca(textoDigitado);
    
    produtos.filter((produto) => {
      return (
        produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
      )
    });    
  };

  return (
      <section>
        <Topo />
        <div className='secao-principal largura-maxima'>
          <div className='botao-escolha'>
            <button onClick={() => filtrarPrato("Entradas")}>
              <img className='img-icone' src={entrada} alt="Entrada" />
              <p>Entradas</p>
            </button>
            <button onClick={() => filtrarPrato("Massas")}>
              <img className='img-icone' src={massa} alt="Massas" />
              <p>Massas</p>
            </button>
            <button onClick={() => filtrarPrato("Carnes")}>
              <img className='img-icone' src={carne} alt="Carnes" />
              <p>Carnes</p>
            </button>
            <button onClick={() => filtrarPrato("Bebidas")}>
              <img className='img-icone' src={bebidas} alt="Bebidas" />
              <p>Bebidas</p>
            </button>
            <button onClick={() => filtrarPrato("Saladas")}>
              <img className='img-icone' src={salada} alt="Saladas" />
              <p>Saladas</p>
            </button>
            <button onClick={() => filtrarPrato("Sobremesas")}>
              <img className='img-icone' src={sobremesa} alt="Sobremesas" />
              <p>Sobremesas</p>
            </button>
          </div>

          <div className='box-input'>

            <IoSearch />
            <input
              type='text'
              value={textoBusca}
              onChange={(event) => buscarJogo(event.target.value)}
              placeholder='Pesquise aqui um dos pratos do nosso cardápio'
            />
          </div>

          <div className='secao-titulo'>
            <h1 className='titulo'>Cardápio</h1>
          </div>

          <div className='secao-cards'>
            {
              categoriaCardapio.map((produto, index) => {
                return <Card 
                  key={index}
                  imagem={produto.imagem}
                  nome={produto.nome}
                  categoria={produto.categoria}
                  descricao={produto.descricao}
                  preco={produto.preco.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                  }

                />
              })
            }
          </div>
        </div>
      </section>

  );
}