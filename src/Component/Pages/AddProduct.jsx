import axios from "axios";
import { useState } from "react"


function AddProduct(){
    const [product, setProduct] = useState({
        title : '',
        price : '',
        image : ''
    });


    const dataHandling = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setProduct({...product, [name]:value})
        console.log(product)
    }
axio
    const submitData = (e) => {
        e.preventDefault()
        
        axios.post('/api/product, 
        
    }


    return(
        <>
            <br/>
            <br/>

            <div className="container">
                <div class="row justify-content-center">
                <div className="col-lg-4 col-md-5 col-sm-8">

                <form action="" >

                    <legend className="col-form-legend text-center">Add Product :</legend>

                    <div class="mb-3">
                      <label for="productTitle" class="form-label">Product Title</label>
                      <input type="text" name="title" id="productTitle" class="form-control" placeholder="Product title" aria-describedby="productTitleDesc" onChange={dataHandling} />
                      {/* <small id="productTitleDesc" class="text-muted">Product title here</small> */}
                    </div>

                    <div class="mb-3">
                      <label for="productPrice" class="form-label">Product Price :</label>
                      <input type="number" name="price" id="productPrice" class="form-control" placeholder="Product price" aria-describedby="productPriceDesc" onChange={dataHandling} />
                      {/* <small id="productPriceDesc" class="text-muted">Product price here</small> */}
                    </div>

                    <div class="mb-3">
                      <label for="productImage" class="form-label">Image Link :</label>
                      <input type="url" name="image" id="productImage" class="form-control" placeholder="Paste your image link here" aria-describedby="productImageDesc" onChange={dataHandling} />
                      {/* <small id="productImageDesc" class="text-muted">Image Link here</small> */}
                    </div>

                    <div className="mb-3 row">
                        <div className="offset-sm-4 col-sm-8">
                            <button type="submit" className="btn btn-primary">Add Product</button>
                        </div>
                    </div>
                </form>
                </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct