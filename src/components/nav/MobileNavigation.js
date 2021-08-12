import styles from "../style/navigation.module.css";
import NavLinks from "./NavLinks";
import {CgMenu} from "react-icons/cg"
import { CgClose } from "react-icons/cg"
import { useState } from "react";

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    const hamburgerIcon = <CgMenu className={styles.hamburger}
                            size='40px' color='white'
                            onClick={() => setOpen(!open)}
                          />;
    const closeIcon = <CgClose className={styles.hamburger}
        size='40px' color='white'
        onClick={() => setOpen(!open)}
    />;

    const closeMobileMenu = () => setOpen(false);
    return ( 
        <nav className={styles.mobileNavigation}>
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>
     );
}
 
export default MobileNav;