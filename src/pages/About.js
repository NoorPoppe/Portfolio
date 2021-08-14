import aboutHeaderBig from "../assets/img/about_header.svg";
//import aboutHeaderSmall from "../assets/img/about_header_gsm.svg";
import styles from "../components/style/about.module.css"
import style from "../components/style/typo.module.css"
import DesignLogos from "../assets/img/skills/logo_design.svg"
import DevelopmentLogos from "../assets/img/skills/logo_development.svg"
import ResearchLogos from "../assets/img/skills/logo_research.svg"
const About = () => {


    return (
        <main>
            <h1 className={styles.title}>About</h1>
            <div className={styles.header}>
                <img alt="foto van noor" src={aboutHeaderBig} />
                <div className={styles.header__text}>
                    <h2 className={styles.subtitle}><span className={styles.subtitle__white}>H</span>ello!</h2>
                    <p className={styles.text__intro}>Nice to meet you ! I’m Noor a last year student at Devine, Howest Kortrijk.  I love webdesign & development. Also i’m a fan  of cinema 4D animations. </p>
                </div>
            </div>
            <div>
                <h2 className={style.subtitel}><span className={style.subtitel__first}>My <br /></span> Skills</h2>
                <div className={styles.skills}>
                    <section>
                        <h3 className={styles.skils_title__des}>Design</h3>
                        <img src={DesignLogos} alt="Design logos" />
                    </section>
                    <section>
                        <h3 className={styles.skils_title__dev}>Development</h3>
                        <img src={DevelopmentLogos} alt="Development logos" />
                    </section>
                    <section>
                        <h3 className={styles.skils_title__res}>Research</h3>
                        <img src={ResearchLogos} alt="Research logos" />
                    </section>
                </div>
            </div>
            <div>
                <h2 className={style.subtitel}><span className={style.subtitel__first}>My <br /></span>Education</h2>
                <section>
                    <fieldset className={styles.fieldset}>
                        <legend className={styles.legend}>Howest - Kask <span className={styles.legend__right}> 2018 - Now</span></legend>
                        <ul className={styles.edu__text}>
                            <li>Kortrijk</li>
                            <li>Bachelor degree</li>
                            <li>Digital Design & Development</li>
                        </ul>
                    </fieldset>
                </section>
                <section>
                    <fieldset className={styles.fieldset}>
                        <legend>Sint-Lucas <span>2016 - 2018</span></legend>
                        <ul>
                            <li>Antwerpen</li>
                            <li>Highschool</li>
                            <li>Industrial product development</li>
                        </ul>
                    </fieldset>
                </section>
            </div>
            <div>
                <h2 className={style.subtitel}><span className={style.subtitel__first}>My <br /></span>Interests</h2>
                <section>
                    <h3>Art museum</h3>
                    <p></p>
                </section>
                <section>
                    <h3>Sustainablity</h3>
                    <p></p>
                </section>
                <section>
                    <h3>Tennis</h3>
                    <p></p>
                </section>
            </div>

        </main>
    );
};

export default About;
