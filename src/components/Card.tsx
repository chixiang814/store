import { data } from "../data"
import { product } from "../interface/interface"

const Card = (props:{data:product}) => {
    const {data} = props;
    
    return(
        <div className="Card tooltip">
            <span className="tooltiptext">{data.title}</span>
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