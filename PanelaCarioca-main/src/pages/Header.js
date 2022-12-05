import { Outlet, Link } from "react-router-dom";
import { ButtonMenu } from '../componets/ButtonMenu';
import './Style/Header.css';
import {useRef , useState} from 'react'
import Logo from'./Style/Imagens/Logo.png'
import Menu from './Style/Imagens/Menu.png'



function Header() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  return (
    <>
    <div className="Header">

    <div id = "Menu">
    <nav ref = {dropDownRef} className = {`menu ${isActive ? "active" : "inactive" }`}> 
     <ul>
      <li>
      <Link to="/blogs">Chefes</Link>
      </li>

      <li>
      <Link to="/cardapio">Cardapio</Link>
      </li>

      <li>
      <Link to="/sobre">Sobre</Link>
      </li>

      <li>
      <Link to="/adm">Adm</Link>
      </li>

     </ul>
    </nav>
<img onClick = {onClick} className = "menuButton" id="Menu1" src = {Menu}/>

</div>

<div id = "logo">
<Link to="/"><img id="logo1" src= {Logo}/></Link>
</div>
   
    </div>
    <Outlet />
    </>
  );
}

export default Header;
