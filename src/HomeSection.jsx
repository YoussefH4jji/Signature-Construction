export default function HomeSection(){
    return(
        <section className="home-section" id="home">
            <div className="home-container">
                <h1 className="home-title">Welcome To <span className="orange">Signature Construction</span></h1>
                <p>
                    We turn dreams into structures. 
                    With a commitment to excellence 
                    and a passion for precision, 
                    we bring your vision to life. 
                </p>
                <div className="home-buttons">
                    <a href="#contact"><button className="btn contact">Contact us</button></a>
                </div>
            </div>
        </section>
    )
}