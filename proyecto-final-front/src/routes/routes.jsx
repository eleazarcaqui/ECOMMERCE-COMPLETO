import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { readCategorie, readCategories } from "../services/CategoryService";
import { readProduct, readProducts } from "../services/ProductService";
import CategoryPage from "../pages/CategoryPage";
import CategoryProduct from "../pages/CategoryProduct";
import ProductsPage from "../pages/ProductsPage"
import ProductPage from "../pages/ProductPage";
import OffersPage from "../pages/OffersPage";
import MiCarrito from "../pages/MiCarrito";
import CartProvider from "../layouts/CartContext";
import Layout from "../layouts/Layout";
import FormOrder from "../forms/FormOrder";
import FormPay from "../forms/FormPay";
import SimpleRegistrationForm from '../forms/FormLogin'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,    
    children: [
      {
        index: true,
        element: <App />,
        
      },
      {
        path: 'categorias',
        element: <CategoryPage />,
        loader: readCategories
      },
      {
        path: 'productos',
        element: (
          <CartProvider>
        <ProductsPage />
        </CartProvider>
        ),
        loader: readProducts
      },
      {
        path: 'ofertas',
        element: <OffersPage />
      },
      {
        path: 'miCarrito',
        element: (
          <CartProvider>
           <MiCarrito />
        </CartProvider>
        ),
      },
      {
      path: 'producto/:id',
      element:  (
        <CartProvider>
         <ProductPage />
      </CartProvider>
      ),
      loader: readProduct
    },
    {
      path: 'categoria/:id',
      element: <CategoryProduct />,
      loader: readCategorie
    },
    {
      path: 'formOrder',
      element: <FormOrder />
    },
    {
      path: 'formPay',
      element: <FormPay/>
    },
    {
      path: 'formLogin',
      element: <SimpleRegistrationForm />
    } 
    ]
  }
]);
