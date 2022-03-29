import { data } from "../data"
import { product } from "../interface/interface"

const Card = (props:{data:product,
                    addToCart:Function,
                    removeFromCart:Function}) => {
    const {data, addToCart, removeFromCart} = props;
    
    return(
        <div className="Card tooltip">
            <span className="tooltiptext">
                <button className="Card--AddCart" onClick={()=>addToCart(data.id)}>Add to Cart</button>
                <button className="Card--RemoveCart" onClick={()=>removeFromCart(data.id)}>Remove from Cart</button>
            </span>
            <img src={data.img} className="Card--Img" />
            <div className="Card--Content--Container">
                <div className="Card--Title">{data.title}</div>
                <div className="Card--Price">RM {(data.price*(1 - data.discountPercentage)).toFixed(2)}</div>
                
                <div className="Card--Discount"> 
                    {
                    data.discountPercentage !== 0 &&
                        <>
                        <span className="Card--Discount--Price">RM {data.price}</span>
                        <span className="Card--Discount--Discount">  {Math.round(data.discountPercentage * 100)}%</span>
                        </>
                    }
                </div>
                <div className="Card--Rating">
                    {
                        [...Array(5)].map((i, index) => (<span className={`fa fa-star ${index < data.rating? "Card--Rating--Checked" : ""}`} ></span>))
                    }
                </div>
            </div>
        </div>
    )
}


export {Card}