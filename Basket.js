import React from 'react'

export default function Basket(props) {

     const{cartItems,onAdd,onRemove}=props



     console.log(cartItems)


    return (
      
        <aside className="block col-1">
            
         <h2>Cart items</h2>

          <div>

         { cartItems.length ===0 ? <div>Cart is empty</div>: ""}

         </div>

         {cartItems.map((item)=>{

           return <div key={item.id} className="row">
               
               <div className="col-2">{item.name}</div>

               <div className="col-2">

               <button onClick={()=>onAdd(item)} className="add">+</button>
               <button onClick={()=>onRemove(item)} className="remove">-</button>

               </div>

           <div className="col-2 text-right">

       {item.qty}* {item.price}

           </div>

               </div>
               
               

         })
         
         
         
         
         
         }

        </aside>

    )


}
