import React from 'react';
import '../Contact/Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import linkedin_icon from '../../assets/linkedin_icon.svg';
import github_icon from '../../assets/github_icon.svg';
import resume_icon from '../../assets/resume_icon.svg';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "84987851-62bf-427f-9eca-c9057ff1df50");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      console.log("Success", res);
      event.target.reset();
    }
  };

  return (
    <div id="contact" className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I am always open to new opportunities, collaborations, and discussions. Feel free to reach out via email or connect with me on LinkedIn.</p>
          <div className='contact-details'>
            <div className="contact-detail">
              <img src={mail_icon} alt="Email Icon" />
              <p>
                <a href="mailto:premrathanaddanki7736@gmail.com" className='contact-icons'>
                  premrathanaddanki7736@gmail.com
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt='' />
              <p>+353 899835382</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Dublin, Ireland</p>
            </div>
            <div className="contact-detail">
              <img src={linkedin_icon} alt="" />
              <p><a href="https://linkedin.com/in/premrathan" target="_blank" rel="noopener noreferrer" className='contact-icons'>LinkedIn</a></p>
            </div>
            <div className="contact-detail">
              <img src={github_icon} alt="" />
              <p><a href="https://github.com/PremRathan2003" target="_blank" rel="noopener noreferrer" className='contact-icons'>GitHub</a></p>
            </div>
            <div className='contact-detail'>
              <img src={resume_icon} alt="Resume Icon" />
              <a href="https://drive.google.com/uc?export=download&id=1mj_9pDKWi7VIRTeJQHzDqV7k30ORTMkU" className="resume-button" download>Download Resume</a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <h2>Contact Me</h2>
          <label>Your Name</label>
          <input type='text' placeholder='Enter your name' name="name" />
          <label>Your Email</label>
          <input type='email' placeholder='Enter your email' name="email" />
          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          <button className='contact-submit' type='submit'>Submit now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
