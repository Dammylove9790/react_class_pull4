import Button from '../ProductButton';
import {FavoriteButton} from '../Component';
import '../CSS/products.css'

function Product(props) {
   const{brand, category, description, discountPercentage, id, images, price, rating, stock, thumbnail, title  } = props.products;
 
   return (

        <div className='img-container'>
            <div>
        <img src={thumbnail} alt={title} />

        <FavoriteButton />

        {/* <span className='add-to-favorite-container'>
          <i class="fa-solid fa-heart add-to-favorite"></i>
        </span> */}
        </div>
      <div>
        {title} <br/>
        <span>{price}</span> <span>{discountPercentage}</span>
        <br/>
        <Button productId={id} />
      </div>
      </div>
  )
}

export default Product