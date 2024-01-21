import React, { useEffect, useState } from 'react';
import { useProducts } from '../../context/ProductContext';
import { Button, TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';



const init = {
    title:"",
    description:"",
    image:"",
    price:"",
    category:""
}

const EditProduct = () => {
    const {id} = useParams()
    const [product,setProduct] = useState(init)
    const {getOneProduct,oneProduct,editProduct,newProduct} = useProducts()
    const navigate = useNavigate()

    useEffect(() => {
        getOneProduct(id)
    },[]);
    useEffect(() => {
        if(oneProduct){
            setProduct(oneProduct)
        }
    },[oneProduct])
    function saveEditedProduct(){
        editProduct(product);
    }
    function handleInp(e) {
        if(e.target.name === "price"){
            let obj = {
                ...product,
                [e.target.name]:Number(e.target.value),
            }
            setProduct(obj)
        }else{
            let obj = {
                ...product,
                [e.target.name]: e.target.value,
            }
            setProduct(obj)
        }
    }
    return (
        <>
          <div id="admin-inputs">
            <div className="container">
              <div className="admin-inputs">
                <TextField
                  onChange={handleInp}
                  name="title"
                  sx={{ width: "100% auto" }}
                  placeholder="Title"
                  value={product.title}
                />
                <TextField
                  onChange={handleInp}
                  name="description"
                  sx={{ width: "100% auto" }}
                  placeholder="Description"
                  value={product.description}
                />
                <TextField
                  onChange={handleInp}
                  name="image"
                  sx={{ width: "100% auto" }}
                  placeholder="Image"
                  value={product.image}
                />
                <TextField
                  onChange={handleInp}
                  name="price"
                  sx={{ width: "100% auto" }}
                  placeholder="Price"
                  value={product.price}
                />
                <TextField
                  onChange={handleInp}
                  name="category"
                  sx={{ width: "100% auto" }}
                  placeholder="Category"
                  value={product.category}
                />
                <Button onClick={saveEditedProduct()} variant="outlined">Save change</Button>
              </div>
            </div>
          </div>
        </>
      );
};

export default EditProduct;