import axios from 'axios';
import { useState, useEffect} from 'react';
import Product from './Product';
import SearchButton from '../SearchButton';
// import {SearchButton} from './Component/Component';


function Products() {
const[data, setData] = useState('');

useEffect(()=>{
    getProducts()
}, [])
    
const getProducts = async ()=>{
    try{
          const products = await axios.get('https://dummyjson.com/products');
       setData(products.data.products);
}catch(err){
    console.log(err)
}
}
console.log('kay :' + data);
return (
    <>
    <SearchButton />

    <section className="product-container">
    {data ?
    
    data.map((value, index)=>{
    return(
      <Product key={index} products ={value}  />
     )
    }):
    <h2>Loading...</h2>
     
     }
    </section>
    </>
  )
}

export default Products