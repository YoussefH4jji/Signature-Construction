/* eslint-disable react/no-unescaped-entities */
export default function About(){
    return(
        <section className="about-section" id="about">
            <h1 className="title">À propos <span className="orange">de nous</span></h1>
            <div className="container about-container">
                
                <div className="about-desc">
                    <p>
                    Chez Signature Construction, nous croyons que chaque espace a le pouvoir d’inspirer.
                    Notre mission est simple : prendre en charge chaque étape de votre projet d’aménagement intérieur — du premier croquis à la touche finale — pour que vous puissiez vous concentrer sur l’essentiel.
                    Qu’il s’agisse d’un bureau à la pointe de la technologie, d’un café accueillant ou d’une villa haut de gamme, nous livrons des solutions clés en main avec précision, style et efficacité.

                    </p>
                    <button className="btn button services">Explorer nos services</button>
                </div>
                <img src="../images/workers.jpg" alt="workers image" className="img-responsive smaller-img mr-md-4 mb-md-0 mb-3" />
            </div>
        </section>

    )
}