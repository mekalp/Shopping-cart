import React from 'react'

export default function Products(props) {

        const {product,onAdd} = props

        console.log(product)

        //here product is each objects-->{},{},{}///

    return (
        <div>

       <img className="small" src={product.image} alt={product.name}/>
       <h3>{product.name}</h3>
       <div>{product.price}</div>

       <div>

      
       <button onClick={()=>onAdd(product)}>Add to cart</button>

       </div>

            
        </div>
    )
}
