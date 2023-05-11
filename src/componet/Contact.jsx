import React from 'react';
import '../componet/Contact.css'

const Contact = () => {

    return (
        <div>
            <section>
                <center>
                    <section className="contact-us" id="contact-section">
                        <form id="contact" action="" method="post">

                            <div className="section-heading">
                                <h4>Contact us</h4>
                            </div>

                            <div className="inputField">
                                <input type="name" name="name" id="name" placeholder="Your name" required />
                                <span className="valid_info_name"></span>
                            </div>

                            <div className="inputField">
                                <input type="Email" name="email" id="email" placeholder="Your email" required="" />
                                <span className="valid_info_email"></span>
                            </div>

                            <div className="inputField">
                                <textarea name="message" id="message" placeholder="Your message"></textarea>
                                <span className="valid_info_message"></span>
                            </div>

                            <div className="inputField btn">
                                <button type="submit" id="form-submit" className="main-gradient-button" disabled>Send a message</button>
                            </div>

                        </form>
                    </section>
                </center>
            </section>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>Company<span>logo</span></h3>

                    <p className="footer-links">
                        <a href="#" className="link-1">Home</a>

                        <a href="#">Blog</a>

                        <a href="#">Pricing</a>

                        <a href="#">About</a>

                        <a href="#">Faq</a>

                        <a href="#">Contact</a>
                    </p>

                    <p className="footer-company-name">Company Name © 2015</p>
                </div>

                <div className="footer-center">

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+1.555.555.5555</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">support@company.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>

                    <div className="footer-icons">

                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-github"></i></a>

                    </div>

                </div>

            </footer>
        </div>
    )
}
export default Contact