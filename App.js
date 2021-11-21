import React, { useState } from "react"
import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket"
import "./App.css"
import data from "./data"


export default function App() {

      const { products } = data;
      const [cartItems,setCartItems] = useState([])


      const onAdd=(product)=>{

      console.log(product)

      const exist= cartItems.find(x=>x.id===product.id);

       if(exist){

           setCartItems(cartItems.map(x=> x.id===product.id ? {...exist, qty:exist.qty+1} : x ))


       } else{






       setCartItems([...cartItems,{...product, qty: 1 }])
       
       ///Array concatination is done above///concatination of array and object

      //  solution : [{}]

       //// ...cartItems===> deconstruct the items in the cartitems array and joining with the {...product} which is coming from the onAdd button in the product page./////
       

      }

    }


    const onRemove=(product)=>{

      const exist= cartItems.find(x=>x.id===product.id);

      if(exist.qty===1){
 

        setCartItems(cartItems.filter(x=>x.id===product.id))


      }else{

 
        setCartItems(cartItems.map(x=>x.id===product.id ? {...exist, qty: exist.qty -1}: x))



      }
  


    }



     
  return (


    <div>

      <Header></Header> 

      <div className="row">

      <Main products = {products} onAdd={onAdd}></Main>
      <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Basket>

      </div>

    </div>



  )
}
