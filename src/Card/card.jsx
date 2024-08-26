import React from "react";

const Card = ({ nome, categoria, descricao, preco, imagem}) => {
    return (
        <section>
            <h1>Cardápio</h1>
            <div>
                <img src={imagem} alt="Pratos" />
                <h2>{nome}</h2>
                <span>{categoria}</span>
                <p>{descricao}</p>
                <p>{preco}</p>
            </div>
        </section>
    )
}

export default Card;