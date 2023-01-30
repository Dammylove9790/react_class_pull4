import {Link} from 'react-router-dom';

function Button({productId}) {
   
  return (
    <div className='product-button'>

        <Link to={`product/${productId}`}>Buy Now <i class="fa-solid fa-credit-card"></i></Link>
        <Link to={`product/${productId}`}>Add to Cart <i class="fa-solid fa-cart-arrow-down"></i></Link>
    </div>
  )
}

export default Button;
