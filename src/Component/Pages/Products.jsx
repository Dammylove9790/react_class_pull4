import axios from 'axios';
import { useState, useEffect} from 'react';
import Product from './Product';
import SearchButton from '../SearchButton';
// import {SearchButton} from './Component/Component';


function Products() {
  const[data, setData] = useState('');
  const[localData, setLocalData] = useState('');

  useEffect(()=>{
      getProducts()
      // getLocalProducts()
  }, [])
      
  const getProducts = async ()=>{
    try{
      await axios.get('https://dummyjson.com/products?limit=4')
      .then((response) => setData(response.data.products))
    }catch(err){
      console.log(err)
    }
  }

  console.log('dammy: ',data)

  const getLocalProducts = () => {
    let getProduct = localStorage.getItem('products');
    let parseProduct = JSON.parse(getProduct);
    setLocalData(parseProduct);
  }

return (
    <>
      <SearchButton />

      <section className="product-container">
        {/* {data ?
          data.map((value, index)=>{
            return(
              <Product key={index} products={value} />
            )
          })
          :
          <h2>Loading...</h2>
        }
        {localData ?
          localData.map((value, index)=>{
            return(
              <Product key={index} products={value} />
            )
          })
          :
          <h2>Loading...</h2>
        } */}
        
      </section>
    </>
  )
}

export default Products