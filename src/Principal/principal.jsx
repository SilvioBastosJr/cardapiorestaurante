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
  
  const entradaCardapio = produtos.entrada;

  const [categoria, setCategoria] = useState(entradaCardapio);

  const filtraPrato = () => {
    let selecionaCategoria = produtos.filter((produto) => produto.categoria === categoria)

    setCategoria(selecionaCategoria);

    return selecionaCategoria;
  }

  return (
      <section>
        <Topo />
        <div className='secao-principal'>
          <div className='botao-escolha'>
            <button onClick={() => filtraPrato()}>
              <img className='img-icone' src={entrada} alt="Entrada" />
              <p>Entradas</p>
            </button>
            <button onClick={() => filtraPrato()}>
              <img className='img-icone' src={massa} alt="Massa" />
              <p>Massas</p>
            </button>
            <button onClick={() => filtraPrato()}>
              <img className='img-icone' src={carne} alt="Carne" />
              <p>Carnes</p>
            </button>
            <button onClick={() => filtraPrato()}>
              <img className='img-icone' src={bebidas} alt="Bebidas" />
              <p>Bebidas</p>
            </button>
            <button onClick={() => filtraPrato()}>
              <img className='img-icone' src={salada} alt="Salada" />
              <p>Saladas</p>
            </button>
            <button onClick={() => filtraPrato()}>
              <img className='img-icone' src={sobremesa} alt="Sobremesa" />
              <p>Saladas</p>
            </button>
          </div>

          <div className='box-input'>

            <IoSearch />
            <input

              type='text'
              placeholder='Pesquise aqui um dos pratos do nosso cardápio'
            />
          </div>

          <div className='secao-cards'>
            {
              produtos.map((produto, index) =>{
                <Card 
                  key={index}
                  imagem={produto.imagem}
                  nome={produto.nome}
                  categoria={produto.categoria}
                  descricao={produto.descricao}
                  preco={produto.preco}

                />
              })
            }
          </div>
        </div>
      </section>

  );
}