import React, { useState } from 'react'

const ItemCount = ({inicial, max, onAdd}) => {

    const[count, setCount] = useState(inicial)

    const sumar = () => {

        if (count < max) {

            setCount(count + 1)

        } else {

            alert("No podés agregar más productos")

        }
    }

    const restar = () => {

        if (count > inicial) {

            setCount(count - 1)

        } else {

            alert("No podés quitar más productos")

        }
        
    }

        return (
            <div>
                <h2>{count}</h2>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>

                
            </div>
        )
}

export default ItemCount;
