import React from 'react'
import { Button } from '../'

import './style.css'

const Card = ({
  id,
  title,
  image,
  price,
  onClick
}) => {
  return (
    <div className="card">
      <div
        className="cardImageWrapper"
      >
        <img
          className="cardImage"
          src={image}
          alt={title}
        />
      </div>
      <h3>{title}</h3>
      <p>Nigro,Thiago</p>
      <small>Vendido por Saravá</small>
      <h2><strong>R$ {price},00</strong></h2>
      <Button
        classStyle="btnDefault"
        onClick={() => onClick(id)}>
        Adicionar ao carrinho
      </Button>
    </div>
  )
}

export default Card