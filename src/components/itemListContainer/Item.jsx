import React from 'react'
import Counter from './Counter'
const Item = ({id, nombre, descripcion, precio, cat, img, stock}) => {
  return (
    <div>
        <img width={200} src={img} alt={nombre} />
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p>${precio}</p>
        <Counter stock={10} onAdd={(number) => console.log("Cantidad agregada", number)}/>
    </div>

  )
}

export default Item