import { useEffect } from 'react';

export default function Contact() {
    useEffect(() => {
        const formData = document.querySelector('form');
        const fullName = document.querySelector('#name')
        const email = document.querySelector('#email')
        const phone = document.querySelector('#phone')
        const subject = document.querySelector('#subject')
        const msg = document.querySelector('#message')
        function sendEmail() {
            const bodyMessage = `
            Full Name : ${fullName.value} 
            <br>
            Email : ${email.value}
            <br>
            Phone :${phone.value}
            <br>
            Message :${msg.value}
            `


            // eslint-disable-next-line no-undef
            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "hajji.youssef.contact@gmail.com",
                Password: "0077FEFA3D091247782F8028BDC823E3923D",
                To: 'hajji.youssef.contact@gmail.com',
                From: "hajji.youssef.contact@gmail.com",
                Subject: subject.value,
                Body: bodyMessage
            }).then(
                message => {
                    if(message == 'OK' ){
                        // eslint-disable-next-line no-undef
                        Swal.fire({
                            title: "Good job!",
                            text: "Your message was sent successfully",
                            icon: "success"
                          });
                    }
                }
            );
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            sendEmail();
        };
        formData.addEventListener('submit', handleSubmit);
    }, []); 

    return (
        <section className="contact-section" id='contact'>
    <h1 className="title">Contactez <span className="orange">-nous</span></h1>
    <form className="container">
        <div className="input-box">
            <div className="input-field">
                <input type="text" placeholder="Nom et prénom" id='name' className="input" />
                <span className="focus"></span>
            </div>
            <div className="input-field">
                <input type="text" placeholder="Adresse e-mail" id='email' className="input" />
                <span className="focus"></span>
            </div>
        </div>
        <div className="input-box">
            <div className="input-field">
                <input type="number" placeholder="Numéro de téléphone " id='phone' min='0' className="input number" />
                <span className="focus"></span>
            </div>
            <div className="input-field">
                <input type="text" placeholder="Sujet du courriel" id='subject'className="input" />
                <span className="focus"></span>
            </div>
        </div>
        <div className="textarea-field">
            <textarea name="" id="message" cols="30" rows="10" placeholder="Votre message" className="input text-field"></textarea>
        </div>
        <div className="btn-box">
            <button type="submit" className="btn button submit">Envoyer</button>
        </div>
    </form>
</section>

    );
}
