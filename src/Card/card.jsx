import React from "react";

import './card.css';

const Card = ({ nome, categoria, descricao, preco, imagem }) => {

    return (
        <section className="secao-card">
                        
            <div className="box-card">
                <div className="container-img">
                    <img src={imagem} alt="Pratos" />
                </div>
                <div className="container-texto">
                    <h2>{nome}</h2>
                    <span>{categoria}</span>
                    <p className="descricao">{descricao}</p>
                    <p className="preco">{preco}</p>
                </div>
            </div>            
        </section>
    )
}

export default Card;