import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Componets/Pages/Home'
import Contact from './Componets/Contact/Contact'
import About from './Componets/About/About'
import Error from './Componets/Error/Error'
import Header from './Componets/Header/Header'
import Fotter from './Componets/Footer/Fotter'
import Categories from './Componets/Categories/Categories'
import Feature from './Componets/Feature/Feature'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Cart from './Componets/Cart/Cart'
import Products from './Componets/Products/Product'
import ProductDetails from './Componets/ProductsDetails/ProductDetails'

function App() {
  return (
    <div>
      <Header/>
     <section>
     <BrowserRouter>
     <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Categories' element={<Categories/>}/>
      <Route path='/Feature' element={<Feature/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/Details/:id' element={<ProductDetails/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/*' element={<Error/>}/>
     </Routes>
     
     </BrowserRouter>
     </section>
<Fotter/>
    </div>
  )
}

export default App