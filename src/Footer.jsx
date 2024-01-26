import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

export default function Footer(){
    return(
        <section className="footer-section">
            <div className="footer-container">
                <div className="company-logo">
                    <img src="../images/white transparent.png" alt="Company'slogo" />
                </div>
                <div className="links-container">
                    <h3>Go Back To:</h3>
                    {/* <a href="#home"><p>Home</p></a> */}
                    <a href="#about"><p>About Us</p></a>
                    <a href="#services"><p>Services</p></a>
                    <a href="#projects"><p>Projects</p></a>
                </div>
                <div className="contact-container">
                    <h3>Contact Us via :</h3>
                    <div className="contact-links">
                        <FaInstagram className="contact-icon"/>
                        <a href="https://www.instagram.com/signaturemaroc/">signature_company</a>

                    </div>
                    <div className="contact-links">
                        <FaFacebook className="contact-icon"/>
                        <a href="">Signature Company</a>

                    </div>
                    <div className="contact-links">
                       <CiPhone className="contact-icon"/>
                        <a href="">0662213065</a>

                    </div>
                    <div className="contact-links">
                        <MdEmail className="contact-icon"/>
                        <a href="">signature.company@gmail.com</a>
                    </div>
                </div>
                <div className="location-container">
                    <h3>Where to find us </h3>
                    <p>Rond point, Banque populaire, Av. Arabie Saoudite, Tangier</p>
                </div>
            </div>
            <footer>©  2024 Signature Construction - All Rights Reserved.</footer>
        </section>
    )
}