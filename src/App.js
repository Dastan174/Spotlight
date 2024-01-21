import "./App.css";
import AdminPage from "./component/admin/AdminPage";
import Header from "./component/navbar/Header";
import Hero from "./component/navbar/Hero";
import CartModal from "./component/pages/CartModal";
import Footer from "./component/pages/Footer";
import SocialMedia from "./component/pages/SocialMedia";
import AuthContext from "./context/AuthContext";
import CartContext from "./context/CartContext";
import ProductContext from "./context/ProductContext";
import MyRoutes from "./routes/MyRoutes";
import "@fontsource/inter";

function App() {
  return (
    <div className="App">
      <ProductContext>
        <CartContext>
          <AdminPage/> 
          <Header />
          <MyRoutes />
          <SocialMedia />
          <Footer />
        </CartContext>
      </ProductContext>
    </div>
  );
}

export default App;
