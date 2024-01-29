/* eslint-disable react/no-unescaped-entities */
import './Services.css'
import { MdConstruction } from "react-icons/md";

export default function Services(){
    return(
        <section className='services-section' id='services'>
            <h1 className="title">Our <span className="orange">Services</span></h1>
            <div className="row">
                {/* <div className="col-sm-3"> */}
                    <div className="e-card playing col-sm-6 col-md-3 ">
                        <div className="image"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="services-container">
                            <MdConstruction className='icon'/>
                            <h3 className='services-title'>Conception 2D ET 3D</h3>
                            <p>
                            Signature Construction vous offre une approche complète pour visualiser et planifier votre projet.
                            À travers des plans détaillés en 2D et des modèles 3D réalistes, 
                            nous vous offrons une perspective immersive de votre espace avant même le début de la construction. 
                            Cela vous permet de personnaliser chaque détail et de garantir que la réalisation finale reflète parfaitement vos aspirations en matière d'aménagement intérieur et extérieur.

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
                            <MdConstruction className='icon'/>
                            <h3 className='services-title'>Projets clé en main</h3>
                            <p>
                            Signature Construction vous offre une solution tout-en-un pour la réalisation de vos projets de construction et d'aménagement. 
                            De la conception initiale à la remise des clés, notre équipe gère tous les aspects du projet, garantissant une exécution transparente et de qualité. Vous pouvez avoir confiance en notre expertise pour transformer votre vision en réalité, 
                            sans souci ni tracas.
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
                            <MdConstruction className='icon'/>
                            <h3 className='services-title'>Travaux sur mesure</h3>
                            <p>
                            Notre expertise en travaux sur mesure est la pour répondre à des besoins spécifiques en offrant des solutions personnalisées dans la construction, 
                            la rénovation, et l'aménagement. À travers une consultation approfondie, 
                            une conception sur mesure, la sélection minutieuse des matériaux, 
                            une fabrication précise, et un contrôle de qualité strict, 
                            nous créons des espaces uniques qui reflètent parfaitement votre style et vos exigences particulières. 
                            Faites confiance à Signature Construction pour des travaux sur mesure qui incarnent votre vision de l'esthétique et de la fonctionnalité.

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
                            <MdConstruction className='icon'/>
                            <h3 className='services-title'>Suivi de chantiers et assistance technique:</h3>
                            <p>
                            Signature Construction assure une gestion experte du projet, 
                            du début à la fin. Notre équipe supervise régulièrement le chantier, 
                            oordonne les intervenants, contrôle les délais et budgets, et assure une qualité constante. 
                            Nous offrons également une assistance technique, vous permettant de vivre l'évolution de votre projet en toute confiance. 
                            Avec Signature Construction, votre projet est entre les mains de orofessionnels dédiés, 
                            assurant une réalisation sans heurts et conforme à vos attentes.
                            </p>
                        
                        </div>
                        
                    </div>
            </div>
            
        </section>
    )
}