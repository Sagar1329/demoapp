
import React, { useState } from "react";
import "./ProductForm.css";


function ProductForm() {
    const [title, setTile] = useState('')
    const [date, setDate] = useState('')

    function titleChangeHandler(event) {
        setTile(event.target.value)
        console.log(title)
    }
    function DateChangeHandler(event) {
        setDate(event.target.value)
        console.log(date)
    }
    return (<form className="NewProduct_form">

        <div className="NewProduct_title">
            <label >Title</label>
            <input type="text" onChange={ titleChangeHandler } />
        </div>

        <div className="NewProduct_date">

            <label htmlFor="">Date</label>
            <input type="date" min='2023-01-01' max='2023-12-12' onChange={ DateChangeHandler } />
        </div>

        <div className="NewProduct_button">
            <button type="submit" id="FormButton" >Add product</button>
        </div>


    </form>)
}

export default ProductForm;