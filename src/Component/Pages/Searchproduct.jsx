
import axios from 'axios'
import { useParams } from 'react-router-dom' 
import { useState, useEffect } from 'react'
import Product from './Product'


function Searchproduct() {
    const { searchWord } = useParams();
    const [data, setData] = useState('');

    useEffect(() => {
        getSearchWord()
    }, [])
    
    const getSearchWord = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/search?q=${searchWord}`);
            setData(response.data.products);
        } catch (error) {
            console.log(error)
        }
    }
        console.log('kay :' + data);

        return (
            <section className="product-container">
            {data ? 
            data.map((value, index)=>{
                return(
                <Product key={index} products = {value}  />
                )
            }):
            <h2>Loading...</h2>
             
             }
            </section>
          )
}
export default Searchproduct