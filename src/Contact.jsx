import { useEffect } from 'react';

export default function Contact() {
    useEffect(() => {
        const formData = document.querySelector('form');
        const fullName = document.querySelector('#name')
        const emai = document.querySelector('#email')
        const phone = document.querySelector('#phone')
        const subject = document.querySelector('#subject')
        const msg = document.querySelector('#message')
        function sendEmail() {
            const bodyMessage = `
            Full Name : ${fullName.value} 
            <br>
            Email : ${emai.value}
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
    <h1 className="title">Contact <span className="orange">Us</span></h1>
    <form className="container">
        <div className="input-box">
            <div className="input-field">
                <input type="text" placeholder="Full Name" id='name' className="input" />
                <span className="focus"></span>
            </div>
            <div className="input-field">
                <input type="text" placeholder="Email Address" id='email' className="input" />
                <span className="focus"></span>
            </div>
        </div>
        <div className="input-box">
            <div className="input-field">
                <input type="number" placeholder="Mobile Number" id='phone' className="input" />
                <span className="focus"></span>
            </div>
            <div className="input-field">
                <input type="text" placeholder="Email Subject" id='subject' className="input" />
                <span className="focus"></span>
            </div>
        </div>
        <div className="textarea-field">
            <textarea name="" id="message" cols="30" rows="10" placeholder="Your Message" className="input text-field"></textarea>
        </div>
        <div className="btn-box">
            <button type="submit" className="btn button submit">Submit</button>
        </div>
    </form>
</section>

    );
}
