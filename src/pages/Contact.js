import Mailer from "../components/email/mailer";
const Contact = () => {

    return (
        <main>
            <h1>Contact</h1>
            <p>Any questions? You can contact me via</p>
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
            <p>Or via socials </p>
            <Mailer />
        </main>
    );
};

export default Contact;
