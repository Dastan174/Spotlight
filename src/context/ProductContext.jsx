import React, { createContext, useContext, useReducer } from "react";
import { ACTION_PRODUCT, API } from "../helpers/const";
import axios from "axios";
import { useParams } from "react-router-dom";

const INIT_STATE = {
  product: [],
  oneProduct: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, product: action.payload.data };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload.data };
    default:
      return state;
  }
};
const productContext = createContext();
export const useProducts = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const { id } = useParams();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function createProduct(newProduct) {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      console.log("error");
    }
  }

  async function getOneProduct(id) {
    try {
      let { res } = await axios(`${API}/${id}`);
      dispatch({ type: ACTION_PRODUCT.GET_ONE_PRODUCT, payload: res });
    } catch (error) {
      console.log("error");
    }
  }

  async function getProduct() {
    try {
      let res = await axios(API);
      dispatch({ type: ACTION_PRODUCT.GET_PRODUCTS, payload: res });
    } catch (error) {
      console.log("error");
    }
  }
  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/${id}`);
      getProduct();
    } catch (error) {
      console.log("error");
    }
  }
  async function editProduct(newProduct) {
    try {
      await axios.patch(`${API}/${newProduct.id}`, newProduct);
      getProduct();
    } catch (error) {
      console.log("error");
    }
  }

  const values = {
    createProduct,
    getProduct,
    product: state.product,
    deleteProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    editProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
