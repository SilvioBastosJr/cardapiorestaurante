import Topo from '../Topo/topo';
import Card from '../Card/card';

import {exibirEntrada, filtrarPrato, buscarPrato} from '../servico';

import './principal.css';

import entrada from '../assets/entrada.png';
import massa from '../assets/massa.png';
import carne from '../assets/carne.png';
import bebidas from '../assets/bebidas.png';
import salada from '../assets/salada.png';
import sobremesa from '../assets/sobremesa.png';

import { IoSearch } from "react-icons/io5";
import { useState } from 'react';

const Principal = () => {

  const [categoriaCardapio, setCategoriaCardapio] = useState(exibirEntrada("Entradas"));

  const [textoBusca, setTextoBusca] = useState("");

  const [bgBTN, setBgBTN] = useState("bg-cinza");

  const handleFiltrarPrato = (categoria) => {

    setCategoriaCardapio(filtrarPrato(categoria));

    setBgBTN(categoria);

    setTextoBusca("");
  };

  const handleBuscarPrato = (textoDigitado) => {
    
    setTextoBusca(textoDigitado); 
    
    textoDigitado.length >= 3 && setCategoriaCardapio(buscarPrato())

    if(textoDigitado.length === 0) {
      console.log("Campo Vazio");
      setCategoriaCardapio(exibirEntrada("Entradas"));
    }

    } 
  
    return (
      <section>
        <Topo />
        <div className='secao-principal largura-maxima'>
          <div className='botao-escolha'>
            <button className={bgBTN === "Entradas" ? 'bg-dourado' : 'bg-cinza'} onClick={() => handleFiltrarPrato("Entradas")}>
              <img className='img-icone' src={entrada} alt="Entrada" />
              <p>Entradas</p>
            </button>
            <button className={bgBTN === "Massas" ? 'bg-dourado' : 'bg-cinza'} onClick={() => handleFiltrarPrato("Massas")}>
              <img className='img-icone' src={massa} alt="Massas" />
              <p>Massas</p>
            </button>
            <button className={bgBTN === "Carnes" ? 'bg-dourado' : 'bg-cinza'} onClick={() => handleFiltrarPrato("Carnes")}>
              <img className='img-icone' src={carne} alt="Carnes" />
              <p>Carnes</p>
            </button>
            <button className={bgBTN === "Bebidas" ? 'bg-dourado' : 'bg-cinza'} onClick={() => handleFiltrarPrato("Bebidas")}>
              <img className='img-icone' src={bebidas} alt="Bebidas" />
              <p>Bebidas</p>
            </button>
            <button className={bgBTN === "Saladas" ? 'bg-dourado' : 'bg-cinza'} onClick={() => handleFiltrarPrato("Saladas")}>
              <img className='img-icone' src={salada} alt="Saladas" />
              <p>Saladas</p>
            </button>
            <button className={bgBTN === "Sobremesas" ? 'bg-dourado' : 'bg-cinza'} onClick={() => handleFiltrarPrato("Sobremesas")}>
              <img className='img-icone' src={sobremesa} alt="Sobremesas" />
              <p>Sobremesas</p>
            </button>
          </div>

          <div className='box-input'>

            <IoSearch />
            <input
              type='text'
              value={textoBusca}
              onChange={(event) => handleBuscarPrato(event.target.value)}
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
};

export default Principal;