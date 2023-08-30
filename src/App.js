import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Shop from './components/Shop';

function App() {
  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex" }}>
        <Cart cart={cart} setCart={setCart} />
        <Shop cart={cart} setCart={setCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
