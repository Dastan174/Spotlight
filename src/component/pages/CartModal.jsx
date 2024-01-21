import React, { useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useProducts } from "../../context/ProductContext";
import { useParams } from "react-router-dom";

const CartModal = () => {
  const { getOneProduct, oneProduct } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  console.log(oneProduct);
  return (
    <div
      style={{
        background: "aqua",
        width: "350px",
        height: "370px",
        border: "1px solid black",
        display: "flex",
      }}
    >
      <div style={{ padding: "20px" }} className="modal-container">
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
          className="item-added"
        >
          <CheckIcon style={{ fontSize: "19px" }} />
          <p style={{ fontSize: "15px", marginLeft: "10px" }}>
            Item added to your cart
          </p>
          <CloseIcon
            sx={{ position: "absolute", left: "300px", bottom: "5px" }}
          />
        </div>
        <div className="productCart-title">
            <img src="" alt="image:/" />
            <h5>Product title</h5>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
