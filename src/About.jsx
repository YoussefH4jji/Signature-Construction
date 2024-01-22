export default function About(){
    return(
        <section className="about-section" id="about">
            <h1 className="title">About <span className="orange">ME</span></h1>
            <div className="about-container">
                <div className="about-desc">
                    <h3>Who We are ?</h3>
                    <p>
                        Signature Construction has been a trusted name in 
                        the construction industry. Our mission is to deliver unparalleled craftsmanship, 
                        exceptional service, and lasting relationships. We are a team of dedicated 
                        professionals driven by a shared commitment to excellence.
                    </p>
                    <button className="btn services">Check Our Services</button>
                </div>
                <img src="../images/workers.jpg" alt="workers image" />
            </div>
        </section>
    )
}