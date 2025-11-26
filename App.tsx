import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import CartDrawer from './components/UI/CartDrawer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Recipes from './pages/Recipes';
import Blog from './pages/Blog';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans">
          <Header />
          <CartDrawer />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;