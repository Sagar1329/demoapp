import './NewProduct.css'
import React from 'react';
import ProductForm from './ProductForm';
const NewProduct = (props) => {

    function saveProduct(product) {
        console.log("Inside New product.js")
        console.log(product);
        props.printProduct(product);
    }
    return (
        <div className='new-product'>
            <ProductForm onSaveProduct={ saveProduct } />
        </div>
    )
}
export default NewProduct;