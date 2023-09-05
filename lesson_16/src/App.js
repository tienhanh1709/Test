import "./App.css";
import Com from "./menu.js";
import Slide from "./Slide.js";
import ProductList from "./Product_list.js";
import Foot from "./Foot.js";
import { useState } from "react";
function App() {
  const [Porduct, setProduct] = useState([
    {
    sale : { top: '0.5rem', right: '0.5rem', display: 'none'},
    image : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name : 'Fancy Product',
    star : {display: 'none'},
    price: '$40.00 - $80.00',
    priceOff : '',
    btn : 'View options',

  },
  {
    sale : { top: '0.5rem', right: '0.5rem', display: 'block'},
    image : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name : 'Special Item',
    star : {display: 'flex'},
    price: ' $18.00',
    priceOff : '$20.00',
    btn : 'Add to cart',
  },
  {
    sale : { top: '0.5rem', right: '0.5rem', display: 'block'},
    image : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name : 'Sale Item',
    star : {display: 'none'},
    price: ' $20.00',
    priceOff : '$50.00',
    btn : 'Add to cart',
  },
  {
    sale : { top: '0.5rem', right: '0.5rem', display: 'none'},
    image : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name : 'Popular Item',
    star : {display: 'flex'},
    price: '$40.00',
    priceOff : '',
    btn : 'Add to cart',
  },
  {
    sale : { top: '0.5rem', right: '0.5rem', display: 'block'},
    image : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name : 'Sale Item',
    star : {display: 'none'},
    price: ' $50.00',
    priceOff : '$25.00',
    btn : 'Add to cart',
  },
  {
    sale : { top: '0.5rem', right: '0.5rem', display: 'none'},
    image : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name : 'Fancy Product',
    star : {display: 'none'},
    price: '$120.00 - $280.00',
    priceOff : '',
    btn : 'View options',

  },
  {
    sale : { top: '0.5rem', right: '0.5rem', display: 'block'},
    image : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name : 'Special Item',
    star : {display: 'flex'},
    price: ' $18.00',
    priceOff : '$20.00',
    btn : 'Add to cart',
  },
  {
    sale : { top: '0.5rem', right: '0.5rem', display: 'none'},
    image : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name : 'Popular Item',
    star : {display: 'flex'},
    price:  ' $40.00 ',
    priceOff : '',
    btn : 'Add to cart',
  }


]);
  return (
    <div>
      <Com />
      <Slide />
      <div>
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {
                Porduct.map((pro, index) =>(
                  <ProductList {...pro} />
                ))}
            </div>
          </div>
        </section>
      </div>
      <Foot />
    </div>
  );
}

export default App;
