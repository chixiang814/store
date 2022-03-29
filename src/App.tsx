import Header from './components/Header'
import { Card } from './components/Card'
import SideBar from './components/SideBar';
import './App.css';
import {data} from "./data"
import {useState, useEffect} from "react"
import {cart} from "./interface/interface"

function App() {

  const initialCart = [] as cart[]
  const [carts, setCart] = useState(initialCart)

  const dataMap = data.map((d, index) => ({
    id: d.id,
    title : d.title,
    price : d.price,
    img : d.image,
    discountPercentage : d.discount,
    rating : d.rating
  }))

  const addToCart = (id: string) : void => {
    setCart((oldCarts) => {
      const items = oldCarts.filter((cart) => cart.id === id)
      if (items.length === 1) {
        return oldCarts.map((cart) => cart.id === id ? {...cart, quantity:cart.quantity+1} : cart)
      }

     return  [...oldCarts, {
       id,
       quantity:1
     }]
    })
  }

  const removeFromCart = (id: string) : void => {
    setCart((oldCarts) => oldCarts.filter(cart => cart.id !== id))
  }

  const addCartQuantity = (id: string) :void => {
    setCart((oldCarts) => oldCarts.map(oldCart => (oldCart.id === id ? 
                                                    {...oldCart, quantity:oldCart.quantity+1} : oldCart)))    
  }
  
  const minusCartQuantity = (id: string) :void => {
    setCart((oldCarts) => oldCarts.map(oldCart => (oldCart.id === id ? 
                                                    {...oldCart, quantity:oldCart.quantity-1} : oldCart)))    
  }

  useEffect(()=>{
    const items = carts.filter((cart) => cart.quantity === 0)
    console.log("yoyo")
    console.log(items)
    if (items.length > 0) {
      items.forEach((i)=> {
        setCart((oldCarts)=> oldCarts.filter((oldCart) => oldCart.id !== i.id))
      })
    }

  }, [carts])

  

  return (
    <div className="App">
      <Header />
      <div className='App--Body'>
        <SideBar carts={carts} addCartHandler={addCartQuantity} minusCartHandler={minusCartQuantity} />
        <div className='App--Product'> 
            <h3>Popular Product</h3>
            <div className='CardContainer'>
              { dataMap.map((d)=> <Card data={d} addToCart={addToCart} removeFromCart={removeFromCart} />) }
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
