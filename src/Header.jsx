// import {  Link,NavLink } from 'react-router-dom'
// import companyLogo from '/images/white.JPG'
import companyLogo from '../public/images/logoPng.png'
import './Header.css'
export default function Header(){
    return(
        <section className="header-section">
            <header className="header">
                {/* <img src={companyLogo} alt=" logo image" className="header-logo" /> */}
                <nav className="navbar navbar-light  navbar-expand-lg header-nav ">
                    <img src={companyLogo} alt=" logo image" className="header-logo img-responsive" />
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav header-pages ">
                            <li className="navbar-item">
                                <a href="#home" className="nav-link header-list">Home</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#about" className="nav-link header-list">About Us</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#services" className="nav-link header-list">Services</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#projects" className="nav-link header-list">Projects</a>
                            </li>
                            <li className="navbar-item header-list">
                                <a href="#contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                 </nav>
               
            </header>

        </section>
    )
}