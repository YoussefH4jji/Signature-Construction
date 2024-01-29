/* eslint-disable react/no-unescaped-entities */
export default function About(){
    return(
        <section className="about-section" id="about">
            <h1 className="title">About <span className="orange">Us</span></h1>
            <div className="container about-container">
                
                <div className="about-desc">
                    <h3>Who We are ?</h3>
                    <p>
                    Bienvenue chez Signature Construction, votre partenaire de confiance pour tous vos besoins en construction, 
                    aménagement intérieur et extérieur, projets clé en main et travaux divers.
                    Nous proposons une gamme complète de services, comprenant la construction, 
                    l'architecture d'intérieur, la peinture, la pose de parquets, de papiers peints, 
                    de carrelage mural et sol, ainsi que des travaux en plâtre simple et décoratif et tout type de travaux divers sur chantiers.
                    Avec notre approche clé en main, nous prenons en charge l'ensemble du processus, de la conception à la réalisation, 
                    pour vous offrir des solutions personnalisées et de haute qualité. 
                    Que ce soit pour des projets résidentiels ou commerciaux, 
                    nous sommes déterminés à surpasser vos attentes.
                    Chez Signature Construction, notre engagement envers l'excellence se reflète dans chaque détail, 
                    assurant la satisfaction de nos clients et la réussite de chaque projet. 
                    Faites-nous confiance pour transformer vos idées en espaces exceptionnels, 
                    où la qualité et l'innovation se marient harmonieusement.

                    </p>
                    <button className="btn button services">Check Our Services</button>
                </div>
                <img src="../images/workers.jpg" alt="workers image" className="img-responsive smaller-img mr-md-4 mb-md-0 mb-3" />
            </div>
        </section>

    )
}