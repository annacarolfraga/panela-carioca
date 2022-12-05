import ReactDOM from "react-dom/client";
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Blogs from "./pages/Blogs";
import Sobre from "./pages/Sobre";
import Cardapio from "./pages/Cardapio";
import Adm from "./pages/Adm";





export default function App() {
  return (
    <div>
      
      
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="adm" element={<Adm />} />
      <Route path="cardapio" element={<Cardapio />} />
  


   
   
        
        </Route>
      </Routes>
    </BrowserRouter>
    
    <Footer />
    
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);