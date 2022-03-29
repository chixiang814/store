import testImg from "../data/covidTestKits.jpg"
import { data } from "../data"
import {cart} from "../interface/interface"

export default (props:{carts:cart[],
                        addCartHandler:Function,
                        minusCartHandler:Function}) => {
    const {carts, addCartHandler, minusCartHandler} = props;

    return (
    <div className="SideBar">
        <p className="Bold">Your Cart</p>
        {
            carts.map(cart => {
                const d = data.filter(d => d.id === cart.id)
                
                if(d.length === 1) {
                return (<div className="Cart--Item">
                            <img src={d[0].image} className="Cart--Img" />
                            <span className="Cart--Title">{d[0].title}</span>
                            <div className="Cart--Action--Container">
                                <button className="Cart--Add Cart--Button" onClick={()=>addCartHandler(cart.id)}>+</button>
                                <span className="Cart--Quantity"> {cart.quantity} </span>
                                <button className="Cart--Minus Cart--Button" onClick={()=>minusCartHandler(cart.id)}>-</button>
                            </div>
                        </div>
                    )}}
                )
        }
    </div>
    )
}