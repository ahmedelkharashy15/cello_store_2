import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Home from './pages/Home'
import Shop from './pages/Shop';
import OurTeam from './pages/OurTeam';
import Login from './pages/Login'
import MyAccount from './pages/MyAccount';
import Checkout from './pages/Checkout';
import Product from './pages/Product'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/team' element={<OurTeam/>} />
        <Route path='/registerion' element={<Login/>} />
        <Route path='/account' element={<MyAccount/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/shop/:productId' element={<Product/>} />
        <Route path='/shop/*' element={<PageNotFound/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
