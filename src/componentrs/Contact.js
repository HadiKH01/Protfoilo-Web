import react from 'react';
import './all.css';

const Contact = () =>{
    return(
        <section className="contact">
            <h1 className="head8">Contact Me</h1>
            <div className="email1">
                <h1 className="email2">Email</h1>
                <input className="email3" type="text" placeholder="info@gmail.com"/>
            </div>
            <div className="email4">
                <h1 className="email5">Phone Number</h1>
                <input className="email6" type="text" placeholder="*******"/>
            </div>
        </section>
    );
}
export default Contact;