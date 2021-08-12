import { Link } from 'react-router-dom';
import stylesHome from "../components/style/home.module.css";
import style from "../components/style/typo.module.css";


const Home = () => {

    return (
        <div>
            <main>
                <p className={stylesHome.text}> <span className={stylesHome.text__play}>Hello</span><span className={stylesHome.wave}>👋</span> I’m <span className={stylesHome.text__play__italic}>Noor</span>. At the moment I’m a <span className={stylesHome.text__bold__white}>Devine </span><span className={stylesHome.text__bold__orange}>student</span>  🎓. Learning web-<span className={stylesHome.text__play__italic__white}>design</span> 🌐, app-<span className={stylesHome.text__play__italic__white}>design</span> 📱, Coding 👩‍💻 & UX-research 📝. Take a look 👀 on my <span className={stylesHome.text__bold__orange}>portfolio</span>.😊</p>
                <div className={stylesHome.button__container}>
                    <Link className={stylesHome.button} to="/about">More about me</Link>
                </div>
                <div className={style.line__title} t>
                    <h1><span>Some</span>Projects</h1>
                    <section>inladen van projecten</section>
                </div>
                <div>
                    <div><h1><span>Contact</span>wanna<span>Work</span>together</h1></div>

                    <section>inladen van projecten</section>
                </div>
            </main>
            <footer>
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
            </footer>
        </div>

    );
};

export default Home;
