import { NavLink } from "react-router-dom";
import { ROUTES } from "../../consts";
import logo from "../../home-logo.svg";

const NavLinks = () => {
    return ( 
        <ul>
            <li><NavLink exact to={ROUTES.HOME}> <img src={logo} alt="home" /> </NavLink></li>
            <div >
                <li><NavLink to={ROUTES.ABOUT} >About</NavLink></li>
                <li><NavLink to={ROUTES.PROJECTS} >Projects</NavLink></li>
                <li><NavLink to={ROUTES.CONTACT} >Contact</NavLink></li>
            </div>
        </ul>
     );
}
 
export default NavLinks;