// import React, { useEffect } from 'react';
// import { useProducts } from '../../context/ProductContext';
// import { Button } from '@mui/material';
// import OneProductPage from './OneProductPage';

// const ProductPage = () => {
//   const {getProduct,product} = useProducts()
//   useEffect(() => {
//     getProduct()
//   }, [])
//     return (
//           <div className="section" id="product-page">
//             <div className="container">
//               <div className="product-page">
//                 {
//                   product ? (
//                     product.map((item) => <OneProductPage item={item}/>)
//                   ) : (
//                     <h1>loading...</h1>
//                   )
//                 }
//               </div>
//             </div>
//           </div>  
//     );
// };

// export default ProductPage;