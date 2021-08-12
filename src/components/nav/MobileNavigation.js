import styles from "../style/navigation.module.css";
import NavLinks from "./NavLinks";
import {CgMenu} from "react-icons/cg"

const MobileNav = () => {
    return ( 
        <nav className={styles.mobileNavigation}>
            <CgMenu className={styles.hamburger} 
                sizes='60px' color='white'
                onClick={() => console.log("you clicked")}
            />
            <NavLinks />
        </nav>
     );
}
 
export default MobileNav;