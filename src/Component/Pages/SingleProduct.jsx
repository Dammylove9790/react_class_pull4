import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import '../CSS/products.css';


function SingleProduct(props) {
  const [data, setData] = useState('')
  const {productId} = useParams()

  useEffect(()=>{
    getSingleProduct()
  }, []);

  const getSingleProduct = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${productId}`);
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  } 

  return (
    <div className="single-product">
        <img src={data.thumbnail} alt={data.title} />
      <div className="content-container">
        <h2 >{data.title}</h2>
        <br />
        <h4>{data.description}</h4>
        <br />

        <span className='productminus' style={{margin : "10px"}}>-</span>
        <span className='productquantity' style={{margin : "10px"}}></span>
        <span className='productadd' style={{margin : "10px"}}>+</span>

        <br />
        <span style={{margin : "10px"}}>$ {data.price}</span> -- <span style={{color : "red", margin : "10px"}}>{data.discountPercentage}%</span>
        <br />
        {data.images ? data.images.map((image) =>{
          return (
            <img src={image} alt={''} />
          )
        }): "No images found"}
        <div className='checkout-container'>
          <Link to={''}> Checkout </Link>
        </div>
      </div>
    </div>
  ) 
}

export default SingleProduct