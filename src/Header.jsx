// import {  Link,NavLink } from 'react-router-dom'
// import companyLogo from '/images/white.JPG'
export default function Header(){
    return(
        <section className="header-section">
            <header className="header">
                <img src="../../../images/white.png" alt=" logo image" className="header-logo" />
                <nav className="header-nav">
                    <ul className="header-pages">
                        <a href="#home"><li className="header-list">Home</li></a>
                        <a href="#about"><li className="header-list">About us</li></a>
                        <a href="#services"><li className="header-list">Services</li></a>
                        <a href="#projects"><li className="header-list">Projects</li></a>
                        <a href="#contact"><li className="header-list">Contact Me</li></a>
                    </ul>
                </nav>
            </header>

        </section>
    )
}