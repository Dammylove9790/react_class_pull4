// import axios from "axios";
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
    }
// axio
    const submitData = (e) => {
        e.preventDefault()
        if (!localStorage.getItem('products')) {
            const productInputDetails = JSON.stringify([{'title' : product.title , 'price' : product.price , 'thumbnail' : product.image}]);
            // localStorage.setItem('products', `${+ productInputDetails}`)
            localStorage.setItem('products', productInputDetails)
            return console.log(localStorage.getItem('products'))
        }

        let newArray = []
        let getProductDetails = localStorage.getItem('products')
        let parseProductDetails = JSON.parse(getProductDetails)
        parseProductDetails.push({title : product.title , price : product.price , thumbnail : product.image});
        localStorage.setItem('products', JSON.stringify(parseProductDetails))

        console.log(parseProductDetails)
        // console.log(parseProductDetails.push({title:"egg"}))

    }



    return(
        <>
            <br/>
            <br/>

            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-4 col-md-5 col-sm-8">

                <form>
                    <legend className="col-form-legend text-center">Add Product :</legend>

                    <div className="mb-3">
                      <label for="productTitle" className="form-label">Product Title</label>
                      <input type="text" name="title" id="productTitle" className="form-control" placeholder="Product title" aria-describedby="productTitleDesc" onChange={dataHandling} />
                      {/* <small id="productTitleDesc" className="text-muted">Product title here</small> */}
                    </div>

                    <div className="mb-3">
                      <label for="productPrice" className="form-label">Product Price :</label>
                      <input type="number" name="price" id="productPrice" className="form-control" placeholder="Product price" aria-describedby="productPriceDesc" onChange={dataHandling} />
                      {/* <small id="productPriceDesc" className="text-muted">Product price here</small> */}
                    </div>

                    <div className="mb-3">
                      <label for="productImage" className="form-label">Image Link :</label>
                      <input type="url" name="image" id="productImage" className="form-control" placeholder="Paste your image link here" aria-describedby="productImageDesc" onChange={dataHandling} />
                      {/* <small id="productImageDesc" className="text-muted">Image Link here</small> */}
                    </div>

                    <div className="mb-3 row">
                        <div className="offset-sm-4 col-sm-8">
                            <button className="btn btn-primary" onClick={submitData}>Add Product</button>
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