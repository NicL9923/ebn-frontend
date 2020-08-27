import React from 'react';

class ContactForm extends React.Component {
    SubmitContactForm = () => {

    }

    render() {
        return(
            <form className="contactForm" method="POST" onSubmit={this.SubmitContactForm}>
                <div>
                    <h1>Contact Us</h1>
                    <p>
                        If you have a question or feedback for us, feel free to contact us
                        using the form below!
                    </p>
                </div>

                <div className="subjEmailContainer">
                    <label for="subject" className="formLabel">Subject</label>
                    <input type="text" name="subject" placeholder="Subject" required/>

                    <label for="email" className="formLabel">Email</label>
                    <input type="text" name="email" placeholder="Email (Optional)"/>
                </div>

                <label for="message" className="formLabel">Message</label>
                <textarea name="message" placeholder="Message"/>

                <input type="submit" value="Send"/>


                <style jsx>{`
                    .contactForm {
                        padding: 35px 10px;
                    }

                    .contactForm * {
                        display: block;
                    }

                    .formLabel {
                    }

                    .subjEmailContainer {
                        display: flex !important;
                        flex-direction: row;
                    }
                `}</style>
            </form>
        );
    }
}

export default ContactForm;