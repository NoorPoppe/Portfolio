import { NavLink } from "react-router-dom";
import { ROUTES } from "../consts/";
import logo from "../home-logo.svg";

const Footer = () => {
    return ( 
        <div>
            <div>
                <p><NavLink exact to={ROUTES.HOME}> <img src={logo} alt="home" /> </NavLink></p>
                <div>
                   <a href="mailto:noor.poppe@icloud.com">
                       noor.poppe@icloud.com
                    </a>
                </div>
                <div>
                    <a href="tel:+32485535503">
                        +32485535503
                    </a>
                </div>
            </div>
            <div>

            </div>

        </div>
     );
}
 
export default Footer;