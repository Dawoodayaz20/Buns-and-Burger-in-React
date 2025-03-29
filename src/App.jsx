import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homePage.component';
import Header from './components/header/header.component';
import MenuPage from './pages/menupage/menu.component';
import Footer from './components/footer/footer.component';
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
      <Router>
      <div>
      <Header />
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/menu' element={ <MenuPage /> } />
        </Routes>
        <Footer />
        </div>
      </Router>
    )
  }
}

export default App
