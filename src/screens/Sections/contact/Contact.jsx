import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";
import { FaGithub, FaLinkedin, FaPhone, FaLocationDot, FaPaperPlane } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import "./Contact.scss";

const Contact = () => {
  const form = useRef();
  const key = "6LeLE78pAAAAACINJF3GoZsv8WvKgGxPVR7GxKd-";

  const [token, setToken] = useState("");
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const setTokenFunc = (getToken) => {
    setToken(getToken);
  };

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
    interest: "design", // Default value for interest
  });

  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: value.trim() === "" ? `${name === 'user_name' ? 'Votre nom est prénom sont requis' : name === 'user_email' ? 'Votre adresse email est requise' : name === 'message' ? 'Expliquer moi se dont vous avez besoin' : ''}` : "",
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setErrors({
      ...errors,
      [name]: value.trim() === "" ? `${name === 'user_name' ? 'Votre nom est prénom sont requis' : name === 'user_email' ? 'Votre adresse email est requise' : name === 'message' ? 'Expliquer moi se dont vous avez besoin' : ''}` : "",
    });
  };

  const [emailSend, setEmailSend] = useState({})
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === "") {
        setLoading(false);
        newErrors[key] = `${key === 'user_name' ? 'Votre nom est prénom sont requis' : key === 'user_email' ? 'Votre adresse email est requise' : key === 'message' ? 'Expliquer moi se dont vous avez besoin' : ''}`;
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
        setLoading(false);
      return;
    }

    emailjs
      .sendForm("service_5fcmczj", "template_24xgud5", form.current, {
        publicKey: "44t5LhEpRhAN1e4eh",
      })
      .then(
        () => {
            setLoading(false);
            setEmailSend({success: true, message: 'Votre message a bien etait envoyer'});

            setTimeout(() => {
                setEmailSend({});
            }, 2500);

            setFormData({
              user_name: "",
              user_email: "",
              message: "",
              interest: "design", // Default value for interest
            });
            setErrors({
              user_name: "",
              user_email: "",
              message: "",
            });
          console.log("SUCCESS!");
        },
        (error) => {
            setLoading(false);
            setEmailSend({success: false, message: "Une erreur est survenue merci de re-esseyer ulterieurement"});
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact">
      <div className="contact-links">
        <ul className="contact-list">
          <li className="contact-item">
            <a
              target="_blank"
              href="https://github.com/DmCodingLabs"
              className="contact-link"
            >
              <FaGithub />
              <span>https://github.com/DmCodingLabs</span>
            </a>
          </li>
          <li className="contact-item">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/dorian-marechal-325848269/"
              className="contact-link"
            >
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
            <a
              target="_blank"
              href="https://www.google.fr/maps/place/Perpignan/@42.6990856,2.8633121,13z/data=!3m1!4b1!4m6!3m5!1s0x12b06e4e80fd88fd:0x1c83306520f2dd4f!8m2!3d42.6886591!4d2.8948332!16zL20vMDlua3E?entry=ttu"
              className="contact-link"
            >
              <FaLocationDot />
              <span>66000 Perpignan</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-form">
        <form method="post" ref={form} onSubmit={sendEmail}>
          <div className="group-checkbox">
            <span className="h5">Je suis intéressé par...</span>
            <div className="checkbox-wrapper">
              <div className="checkbox">
                <input
                  type="radio"
                  name="interest"
                  value="design"
                  id="design"
                  checked={formData.interest === "design"}
                  onChange={handleChange}
                />
                <label htmlFor="design">Design</label>
              </div>
              <div className="checkbox">
                <input
                  type="radio"
                  name="interest"
                  value="custom web site"
                  id="custom"
                  checked={formData.interest === "custom web site"}
                  onChange={handleChange}
                />
                <label htmlFor="custom">Développement personnalisé</label>
              </div>
              <div className="checkbox">
                <input
                  type="radio"
                  name="interest"
                  value="wordpress"
                  id="wordpress"
                  checked={formData.interest === "wordpress"}
                  onChange={handleChange}
                />
                <label htmlFor="wordpress">Développement wordpress</label>
              </div>
              <div className="checkbox">
                <input
                  type="radio"
                  name="interest"
                  value="others"
                  id="others"
                  checked={formData.interest === "others"}
                  onChange={handleChange}
                />
                <label htmlFor="others">Autres</label>
              </div>
            </div>
          </div>
          <div className="form-content">
            <div className="form-group">
              <label htmlFor="user_name"  className={formData.user_name != '' ? 'active' : ''}>Nom & Prénom</label>
              <input
                type="text"
                name="user_name"
                autoComplete="off"
                id="user_name"
                value={formData.user_name}
                onChange={handleChange}
                onInput={handleInput}
              />
              {errors.user_name && (
                <span className="error">{errors.user_name}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="user_email" className={formData.user_email != '' ? 'active' : ''}>Adresse email</label>
              <input
                type="email"
                autoComplete="off"
                name="user_email"
                id="user_email"
                value={formData.user_email}
                onChange={handleChange}
                onInput={handleInput}
              />
              {errors.user_email && (
                <span className="error">{errors.user_email}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="message" className={formData.message != '' ? 'active' : ''}>Message</label>
              <textarea
                name="message"
                autoComplete="off"
                id="message"
                value={formData.message}
                onChange={handleChange}
                onInput={handleInput}
              ></textarea>
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>

            <div className="form-group btn">
              <GoogleReCaptchaProvider reCaptchaKey={key} useEnterprise={true}>
                <GoogleReCaptcha
                  className="google-recaptcha-custom-class"
                  onVerify={setTokenFunc}
                  refreshReCaptcha={refreshReCaptcha}
                />
              </GoogleReCaptchaProvider>
              <button type="submit" className={`submit ${emailSend.success === true ? 'success' : emailSend.success === false ? 'error' : ''}`} disabled={loading ? true : false}>
                {loading ? <span class="loader"></span> : emailSend.success ? emailSend.message :  (
                    <>
                        <FaPaperPlane />
                        <span className="text-btn">Envoyer</span>
                    </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
