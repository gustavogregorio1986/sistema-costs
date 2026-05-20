import { Link } from "react-router-dom";
import Container  from './Container';
import Style from './Navbar.module.css';
import logo from '../img/costs_logo.png';

function Navbar() {
    return (
      <nav className={Style.navbar}>
       <Container>
         <Link to="/">
            <img src={logo} alt="Costs" />
         </Link>
         <ul className={Style.list}>
           <li className={Style.item}>
              <Link to="/">Home</Link>
           </li>
           <li className={Style.item}>
              <Link to="/projects">Projetos</Link>
           </li>
           <li className={Style.item}>
             <Link to="/company">Empresa</Link>
           </li>
           <li className={Style.item}>
               <Link to="/contact">Contato</Link>
           </li>
         </ul>   
       </Container>
      </nav>
    )
}

export default Navbar;