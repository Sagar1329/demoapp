
import React, { useState } from "react";
import "./ProductForm.css";


function ProductForm(props) {

    // const [fullProductInput, setfullProductInput] = useState({
    //     newtitle: '',
    //     newdate: ''
    // });

    const [newtitle, setTile] = useState('')
    const [newdate, setDate] = useState('')

    function titleChangeHandler(event, prevState) {
        setTile(event.target.value)

    }


    // function titleChangeHandler(event) {
    //     setTile(event.target.value)
    //     console.log(title)
    // }
    function DateChangeHandler(event) {
        setDate(event.target.value)
        //  console.log("Fi")
    }
    function SubmitHandler(event) {
        event.preventDefault();

        const productData = {
            title: newtitle,
            date: newdate
        }
        console.log("Form submitted")
        console.log(productData)


        props.onSaveProduct(productData);
        setTile('')
        setDate('')
    }
    return (<form className="NewProduct_form" onSubmit={ SubmitHandler }>

        <div className="NewProduct_title">
            <label >Title</label>
            <input type="text" value={ newtitle } onChange={ titleChangeHandler } />
        </div>

        <div className="NewProduct_date">

            <label htmlFor="">Date</label>
            <input type="date" min='2023-01-01' max='2023-12-12' onChange={ DateChangeHandler } value={ newdate } />
        </div>

        <div className="NewProduct_button">
            <button type="submit" id="FormButton" >Add product</button>
        </div>


    </form>)
}

export default ProductForm;