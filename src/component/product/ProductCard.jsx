import { Button } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import { hover } from "@testing-library/user-event/dist/hover";
import { useAuthContext } from "../../context/AuthContext";
import { ADMIN_USER } from "../../helpers/const";

const ProductCard = ({ item }) => {
  const { user } = useAuthContext();
  const { id } = useParams();
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();
  return (
    <div className="card">
      <img
        onClick={() => navigate(`product/${item.id}`)}
        className="product-image"
        src={item.image}
      />
      <div className="card-options">
        <div className="title">
          <p className="product-title">{item.title}</p>
          <p className="product-price">${item.price} USD</p>
        </div>
        {ADMIN_USER.map((el, index) =>
          user && el.email === user.email ? (
            <div key={index} className="btns">
              <Button
                onClick={() => deleteProduct(item.id)}
                variant="contained"
              >
                delete
              </Button>
              <Button onClick={() => navigate(`edit/${item.id}`)}>edit</Button>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default ProductCard;
