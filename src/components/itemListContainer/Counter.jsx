import React from 'react'
import { useState } from 'react'

const Counter = ({stock, onAdd}) => {

    const [numnber, setNumber] = useState (0);

    const sumar = () =>{
      if (numnber < stock) {
        setNumber(numnber + 1)
      } 
    }
    const restar = () =>{
      if (numnber >= 1) {
        setNumber (numnber - 1)
      } 
    }

  return (
    <div>
    <div className="btn-group" role="group" aria-label="Basic outlined example">
  <button onClick={restar} type="button" className="btn btn-outline-primary">-</button>
  <button type="button" className="btn btn-outline-primary">{numnber}</button>
  <button onClick={sumar} type="button" className="btn btn-outline-primary">+</button>
     </div>
     
   <div>
    <button  onClick={() => onAdd(numnber)} disabled={!stock} type="button" className="btn btn-outline-primary">Agregar al carrito</button>
   </div>
   </div>
    // <div>
    //     <button onClick={sumar}>+</button>
    //     <h3>{numnber}</h3>
    //     <button onClick={restar}>-</button>
    //     <hr />
    // </div>
  )
}

export default Counter