import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Searchproduct from "./Searchproduct";
import AddProduct from "./AddProduct";


function Pageroutes() {
  return (

   <header>
    <nav>
    <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/searchproduct/:searchWord" element={<Searchproduct />} />
        <Route path="/addproduct" element={<AddProduct />} />
    </Routes>
    </nav>
   </header>
  
  )
}

export default Pageroutes