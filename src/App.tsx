import Header from './components/Header';
import { Card } from './components/Card';
import './App.css';
import {data} from "./data"
import { product } from "./interface/interface"

// interface product {
//   title : string,
//   price : number,
//   discountPercentage: number,
//   img : string
// }


function App() {

  const dataMap = data.map((d) => ({
    title : d.title,
    price : d.price,
    img : d.image,
    discountPercentage : d.discount,
    rating : d.rating
  }))


  return (
    <div className="App">
      <Header />
      <div className='App--Body'> 
          <h3>Popular Product</h3>
          <div className='CardContainer'>
            { dataMap.map((d)=> <Card data={d} />) }
          </div>
      </div>
    </div>
  );
}

export default App;
