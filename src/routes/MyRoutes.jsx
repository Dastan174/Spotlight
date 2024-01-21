import React from "react";
import ProductPage from "../component/pages/ProductPage";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../component/admin/AdminPage";
import Hero from "../component/navbar/Hero";
import EditProduct from "../component/product/EditProduct";
import OneProductPage from "../component/pages/OneProductPage";
import AuthenticationPage from "../component/authentication/AuthenticationPage";
import RegisterPage from "../component/authentication/RegisterPage";
import AboutUs from "../component/pages/AboutUs";
import CartPage from "../component/cart/CartPage";
import Contact from "../component/pages/Contact";
import { ADMIN_USER } from "../helpers/const";
import { ProtectedRoutes } from "../helpers/function";

const MyRoutes = () => {
  const ADMIN_ROUTES = [
    { link: "/admin", element: <AdminPage />, id: 1 },
    { link: `edit/:id`, element: <EditProduct />, id: 2 },
  ];
  const PUBLIC_ROUTES = [
    { link: "/", element: <Hero />, id: 1 },
    { link: "/product/:id", element: <OneProductPage />, id: 2 },
    { link: "/login", element: <AuthenticationPage />, id: 3 },
    { link: "/registration", element: <RegisterPage />, id: 4 },
    { link: "/about-us", element: <AboutUs />, id: 5 },
    { link: "/cart", element: <CartPage />, id: 6 },
    { link: "/contact-page", element: <Contact />, id: 7 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}

        <Route element={<ProtectedRoutes/>}>
          {ADMIN_ROUTES.map((el) => (
            <Route path={el.link} element={el.element} key={el.id} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
