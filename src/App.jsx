import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homePage.component';
import Header from './components/header/header.component';
import MenuPage from './pages/menupage/menupage.component';
import Footer from './components/footer/footer.component';
import CartPage from './pages/cartpage/cartpage.component';
import { CartProvider } from './components/cart/cartcontext';
import './App.css'


class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser: null
    }
  }
  render() {
    return (
      <CartProvider>
        <Router>
      <div>
      <Header />
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/menu' element={ <MenuPage /> } />
          <Route path='/cart' element={ <CartPage /> } />
        </Routes>
        <Footer />
        </div>
      </Router>
      </CartProvider>
    )
  }
}

export default App
