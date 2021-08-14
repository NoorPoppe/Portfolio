import emailjs from "emailjs-com";
import { useState } from "react";
//import { useHistory } from 'react-router-dom';
//import { Link } from 'react-router-dom';

const Mailer = () => {
    const [name, setName] = useState("");
    const [values, setValues] = useState({
        name: "",
        email:"",
        message: "",
    })
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_53nax8k",
            "template_cz1zz0n",
            e.target,
            "user_Xdjav4TLY6uQOz61cfNDI"
        ).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }
    
    /*let history = useHistory();

    const goTo = () => {
        history.push('/succes')
    }*/
    return (
        <div>
            
            <form onSubmit={sendEmail}>
                <label>Hey I'm</label>
                <input type="text" 
                        placeholder="your name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                <label>I would like</label>
                <textarea value={values.message} name="message" rows="4" placeholder="project description" />
                <label>You can contact me via</label>
                <input value={values.email} type="email" name="user_email" placeholder="your e-mail" />
                
                <p>Greetings {name}</p>
               <input
                    type="submit"
                    value="Send"
                    to="/succes"
                />
            </form>
        </div>
    );
};

export default Mailer;