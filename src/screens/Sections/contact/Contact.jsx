import React, { useRef } from 'react'
import { FaGithub, FaLinkedin, FaPhone, FaLocationDot, FaPaperPlane } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import './Contact.scss'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {

    const form = useRef();
    const recaptchaRef = useRef();
    const key = '6LfYIL0pAAAAAPIKGI6D81JyB85X1dziXlF5IqM2'

    function onChange(value) {
        console.log("Captcha value:", value);
      }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5fcmczj","template_24xgud5", form.current, {
        publicKey: '44t5LhEpRhAN1e4eh',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="contact">
        <div className="contact-links">
            <ul className="contact-list">
                <li className="contact-item">
                    <a target='_blanc' href="https://github.com/DmCodingLabs" className="contact-link">
                        <FaGithub />
                        <span>https://github.com/DmCodingLabs</span>
                    </a>
                </li>
                <li className="contact-item">
                    <a target='_blanc' href="https://www.linkedin.com/in/dorian-marechal-325848269/" className="contact-link">
                        <FaLinkedin />
                        <span>https://www.linkedin.com/in/dorian-marechal-325848269</span>
                    </a>
                </li>
                <li className="contact-item">
                    <a href="mailto:pro.dorianm@gmail.com" className="contact-link">
                        <HiMail />
                        <span>pro.dorianm@gmail.com</span>
                    </a>
                </li>
                <li className="contact-item">
                    <a href="tel:+33769719983" className="contact-link">
                        <FaPhone />
                        <span>+33 7 69 71 99 83</span>
                    </a>
                </li>
                <li className="contact-item">
                    <a target='_blanc' href="https://www.google.fr/maps/place/Perpignan/@42.6990856,2.8633121,13z/data=!3m1!4b1!4m6!3m5!1s0x12b06e4e80fd88fd:0x1c83306520f2dd4f!8m2!3d42.6886591!4d2.8948332!16zL20vMDlua3E?entry=ttu" className="contact-link">
                        <FaLocationDot />
                        <span>66000 Perpignan</span>
                    </a>
                </li>
            </ul>
        </div>
        <div className="contact-form">
            <form method='post' ref={form} onSubmit={sendEmail}>
                <div className="group-checkbox">
                    <span className="h5">
                        Je suis intéressé par...
                    </span>
                    <div className="checkbox-wrapper">
                        <div className="checkbox">
                            <input type="radio" name="interest" value={'design'} id="design" defaultChecked/>
                            <label htmlFor="design">Design</label>
                        </div>
                        <div className="checkbox">
                            <input type="radio" name="interest" value={'custom web site'} id="custom" />
                            <label htmlFor="custom">Développement personnalisé</label>
                        </div>
                        <div className="checkbox">
                            <input type="radio" name="interest" value={'wordpress'} id="wordpress" />
                            <label htmlFor="wordpress">Développement wordpress</label>
                        </div>
                        <div className="checkbox">
                            <input type="radio" name="interest" value={'others'} id="others" />
                            <label htmlFor="wordpress">Autres</label>
                        </div>
                    </div>
                </div>
                <div className="form-content">
                    <div className="form-group">
                        <label htmlFor="user_name">Nom & Prénom</label>
                        <input type="text" name="user_name" autocomplete="off" id="user_name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Adresse email</label>
                        <input type="email" autocomplete="off" name="user_email" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" autocomplete="off" id="message"></textarea>
                    </div>
                    
                    <div className="form-group btn">
                    <ReCAPTCHA
                        sitekey={key}
                        onChange={onChange}
                        ref={recaptchaRef}
                    />
                        <button type='submit' className="submit">
                            <FaPaperPlane />
                            Envoyer
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact