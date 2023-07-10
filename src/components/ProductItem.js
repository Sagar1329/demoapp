import React, { useState } from "react";
import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';


const ProductItem = (props) => {


    const [title, setTitle] = useState(props.title);

    function clickHandler() {
        setTitle("Porpcorn");
        console.log("Button clicked")
    }
    return (<Card className='product-item'>

        <ProductDate date={ props.date } />
        <div className="product-item_description">
            <h2>{ title }</h2>
            < button className="CartButton" onClick={ clickHandler }>Add to cart</button>

        </div>

    </Card>);
}


export default ProductItem;