import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../../context/ProductContext";

const init = {
    title:"",
    description:"",
    image:"",
    price:"",
    category:""
}




const AdminPage = () => {
    const [product,setProduct] = useState(init)
    const {createProduct} = useProducts()

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

    function addProduct(){
        createProduct(product);
        setProduct(init);
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
            <Button onClick={() => addProduct()} variant="outlined">Add Product</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
