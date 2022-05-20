import React, { useState } from "react";
import './ItemCount.css';
import { Button } from '../Button';

export function ItemCount({stock, onAdd}) {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState([]);

  //Funcion para decrementar cantidad
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  //Funcion para incrementar cantidad
  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  }


  //Funcion para agregar al carrito
  onAdd = (count) => {
    setCart([cart]);
  }

  return(
    <div className="item">
      <div className="count">
        <Button buttonStyle={'btn--outline'} buttonSize={'btn--short'} onClick={handleDecrement}>-</Button>
      <p>{count}</p>
        <Button buttonStyle={'btn--outline'} buttonSize={'btn--short'} onClick={handleAdd}>+</Button>
      </div>
      <Button onClick={() => onAdd(count)} >Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount;