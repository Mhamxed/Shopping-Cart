import './index.css'
import Header from './components/header'
import Footer from './components/footer'
import HomePage from './components/homepage'
import AllProducts from './components/AllProducts'
import Cart from './components/cart'
import ErrorPage from './components/ErrorPage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from 'react'
import cartContext from './components/cartContext'


function App() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [sum, setSum] = useState(0)

  function getPriceNumber(price) {
    return price.slice(1, price.length) * 1 
  }

  useEffect(() => {
    setTotal(0)
    setSum(0)
    cart.forEach(product => setTotal(total + product.quantity))
    cart.forEach(product => setSum(sum + getPriceNumber(product.price) * product.quantity))
  }, [cart])

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <>
        <Header/>
        <HomePage />
        <Footer/>
      </>,
      errorElement: <ErrorPage />
    },
    {
      path: "/all-products",
      element: 
      <>
        <Header/>
        <AllProducts/>
        <Footer/>
      </>
    },
    {
      path: "/cart",
      element: 
      <>
        <Header/>
        <Cart/>
        <Footer/>
      </>
    }
  ]);

  return (
    <cartContext.Provider value={
      {
        cart: cart,
        setCart: setCart,
        total: total,
        setTotal: setTotal,
        sum: sum,
        setSum: setSum
      }
      }>
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </cartContext.Provider>
  )
}

export default App
