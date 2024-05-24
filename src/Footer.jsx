// import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

export default function Footer(){
    return(
        <section className="footer-section">
            <div className="footer-container">
                <div className="company-logo">
                    <img src="../images/white transparent.png" alt="Company'slogo" className="footerImg"/>
                </div>
                <div className="links-container">
                    <h3>Revenir à:</h3>
                    {/* <a href="#home"><p>Home</p></a> */}
                    <a href="#about"><p>À propos de nous</p></a>
                    <a href="#services"><p>Nos Services</p></a>
                    <a href="#projects"><p>Nos Projects</p></a>
                </div>
                <div className="contact-container">
                    <h3>Contactez-nous via :</h3>
                    {/* <div className="contact-links">
                        <FaInstagram className="contact-icon"/>
                        <a href="https://www.instagram.com/signature__construction/">signature__construction</a>

                    </div>
                    <div className="contact-links">
                        <FaFacebook className="contact-icon"/>
                        <a href="">Signature Company</a>

                    </div> */}
                    {/* <div className="contact-links">
                       <CiPhone className="contact-icon"/>
                        <a href="">0662213065</a>

                    </div> */}
                    <div className="contact-links">
                        <MdEmail className="contact-icon"/>
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">signature.c.info@gmail.com</a>
                    </div>
                    <div className="contact-links">
                        <CiPhone className="contact-icon"/>
                        <a href="">+212 62 21 30 65</a>
                    </div>
                </div>
                <div className="location-container">
                    <h3>Où nous trouver</h3>
                    <p>Rond point, Banque populaire, Av. Arabie Saoudite, Tangier</p>
                </div>
            </div>
            <footer>©  2024 Signature Construction - All Rights Reserved.</footer>
        </section>
    )
}