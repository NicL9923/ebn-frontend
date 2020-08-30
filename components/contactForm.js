import React from 'react';

class ContactForm extends React.Component {
    SubmitContactForm = () => {

    }

    render() {
        return(
            <form className="contactForm" method="POST" onSubmit={this.SubmitContactForm}>
                <div>
                    <h1 className="cFormHdr">Contact Us</h1>
                    <p className="cFormSubHdr">
                        If you have a question or feedback for us, feel free to contact us
                        using the form below!
                    </p>
                </div>

                <div className="subjEmailContainer">
                    <div>
                        <label for="subject" className="formLabel">Subject</label>
                        <input type="text" className="textInput" name="subject" placeholder="Subject" required/>
                    </div>

                    <div>
                        <label for="email" className="formLabel">Email</label>
                        <input type="text" className="textInput" name="email" placeholder="Email (Optional)"/>
                    </div>
                </div>

                <div>
                    <label for="message" className="formLabel">Message</label>
                    <textarea  className="msgInput" name="message" placeholder="Message" required/>
                </div>

                <input type="submit" className="submitBn" value="Send"/>


                <style jsx>{`
                    .contactForm {
                        padding: 35px 10px;
                        display: inline-block;
                    }

                    .contactForm * {
                        display: block;
                    }

                    .cFormHdr {
                        text-align: left;
                    }

                    .cFormSubHdr {
                        margin-bottom: 15px;
                    }

                    .formLabel {
                        font-weight: bold;
                        display: block;
                        text-align: left;
                        font-size: 18px;
                        margin-bottom: 5px;
                        margin-top: 20px;
                    }

                    .textInput {
                        font-size: 16px;
                        display: block;
                        padding: 3px;
                    }

                    .msgInput {
                        padding: 0 3px;
                        width: 100%;
                        resize: vertical;
                    }

                    .subjEmailContainer {
                        display: flex !important;
                        flex-direction: row;
                        justify-content: space-between;
                    }

                    .submitBn {
                        padding: 10px 15px;
                        background-color: #078f15;
                        color: white;
                        border: none;
                        font-size: 18px;
                        margin: 20px 0;
                        transition: 0.3s ease;
                    }

                    .submitBn:hover {
                        cursor: pointer;
                        background-color: #004507;
                    }
                `}</style>
            </form>
        );
    }
}

export default ContactForm;