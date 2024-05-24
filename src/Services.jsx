/* eslint-disable react/no-unescaped-entities */
import './Services.css'
import { BsBadge3D } from "react-icons/bs";
import { IoKeyOutline } from "react-icons/io5";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";

export default function Services(){
    return(
        <section className='services-section' id='services'>
            <h1 className="title">Nos <span className="orange">services</span></h1>
            <div className="row">
                {/* <div className="col-sm-3"> */}
                    <div className="e-card playing col-sm-6 col-md-3 ">
                        <div className="image"></div>
                        <div className="wave firstWave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="services-container">
                            <BsBadge3D className='icon'/>
                            <h3 className='services-title'>Conception 2D ET 3D</h3>
                            <p>
                            Chez Signature Construction, nous vous aidons à visualiser et planifier votre projet
                            grâce à des plans détaillés en 2D et des modèles réalistes en 3D. Vous pouvez ainsi
                            personnaliser chaque détail pour que le résultat final reflète parfaitement vos aspirations en
                            aménagement intérieur et extérieur.

                            </p>
                        
                        </div>
                        
                    </div>
                   
                {/* </div> */}
                {/* <div className="col-sm-3"> */}
                <div className="e-card playing col-sm-6 col-md-3 ">
                        <div className="image"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="services-container">
                            <IoKeyOutline className='icon'/>
                            <h3 className='services-title'>Projets clé en main</h3>
                            <p>
                            Nous vous offrons une solution complète pour vos projets de construction et
                            d'aménagement. De la conception à la remise des clés, notre équipe gère tout, assurant une
                            exécution transparente et de qualité.
                            </p>
                        
                        </div>
                        
                    </div>
                {/* </div> */}
                {/* <div className="col-sm-3"> */}
                <div className="e-card playing col-sm-6 col-md-3">
                        <div className="image"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="services-container">
                            <FaScrewdriverWrench className='icon'/>
                            <h3 className='services-title'>Travaux sur mesure</h3>
                            <p>
                            Notre expertise en travaux sur mesure répond à vos besoins spécifiques en
                            construction, rénovation, et aménagement. Grâce à une consultation approfondie, une
                            conception personnalisée, une sélection minutieuse des matériaux, une fabrication précise, et
                            un contrôle de qualité strict, nous créons des espaces uniques qui reflètent parfaitement votre
                            style et vos exigences.


                            </p>
                        
                        </div>
                        
                    </div>
                {/* </div> */}
                {/* <div className="col-sm-3"> */}
                <div className="e-card playing col-sm-6 col-md-3 ">
                        <div className="image"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="services-container">
                            <FaPhoneVolume className='icon'/>
                            <h3 className='services-title'>Suivi de chantiers et assistance technique:</h3>
                            <p>
                            Signature Construction assure une gestion experte du projet, du début à la fin. Notre
                            équipe supervise régulièrement le chantier, coordonne les intervenants, contrôle les délais et
                            budgets, et assure une qualité constante. Nous offrons également une assistance technique,
                            vous permettant de vivre l'évolution de votre projet en toute confiance.
                            </p>
                        
                        </div>
                        
                    </div>
            </div>
            
        </section>
    )
}