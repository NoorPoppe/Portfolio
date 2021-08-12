import styles from "../style/navigation.module.css";
//import style from "../components/style/typo.module.css";
import MobileNav from "./MobileNavigation";
import Navigation from "./Navigation";

const Nav = () => {

    return (
        <div className={styles.navBar}>
            <MobileNav />
            <Navigation />
        </div>
    );
};

export default Nav;