import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex" }}>
        <Cart />
        <Shop />
      </div>
      <Footer />
    </div>
  );
}

export default App;
