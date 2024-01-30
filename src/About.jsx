/* eslint-disable react/no-unescaped-entities */
export default function About(){
    return(
        <section className="about-section" id="about">
            <h1 className="title">À propos <span className="orange">de nous</span></h1>
            <div className="container about-container">
                
                <div className="about-desc">
                    <h3>Qui sommes-nous</h3>
                    <p>
                    Bienvenue chez Signature Construction, votre partenaire de confiance pour tous vos besoins en construction, 
                    aménagement intérieur et extérieur, projets clé en main et travaux divers. Nous proposons une gamme complète de services, 
                    comprenant la construction, l'architecture d'intérieur, la peinture, la pose de parquets, de papiers peints, de carrelage mural et sol, 
                    ainsi que des travaux en plâtre simple et décoratif et tout type de travaux divers sur chantiers.

                    </p>
                    <button className="btn button services">Explorer nos services</button>
                </div>
                <img src="../images/workers.jpg" alt="workers image" className="img-responsive smaller-img mr-md-4 mb-md-0 mb-3" />
            </div>
        </section>

    )
}