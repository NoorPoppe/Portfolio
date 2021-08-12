import { NavLink } from "react-router-dom";
import { ROUTES } from "../../consts";
import logo from "../../home-logo.svg";
import styles from "../style/navigation.module.css";
//import {motion} from 'framer-motion'

const NavLinks = (props) => {
    //const animationFrom = {opacity: 0, y:-40};
    //const animationTo = { opacity: 1, y: 0 };

    return (
        <ul className={styles.nav}>
            <li className={styles.home__ham}><NavLink exact to={ROUTES.HOME}> <img src={logo} alt="home" /> </NavLink></li>
            <div className={styles.nav__div}>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink className={`${styles.home} ${styles.nav__li}`} to={ROUTES.HOME} >Home</NavLink></li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink className={styles.nav__li} to={ROUTES.ABOUT} >About</NavLink></li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink className={styles.nav__li} to={ROUTES.PROJECTS} >Projects</NavLink></li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink className={styles.nav__li} to={ROUTES.CONTACT} >Contact</NavLink></li>
            </div>
        </ul>
    );
}

export default NavLinks;