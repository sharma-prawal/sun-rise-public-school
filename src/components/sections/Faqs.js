import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { useToasts } from 'react-toast-notifications';
import validator from 'validator';
import { send as emailJs } from 'emailjs-com';

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const Faqs = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [feedback, setFeedback] = useState('');
  const [enableButton, setEnableButton] = useState(true);
 
  const { addToast } = useToasts();

  const outerClasses = classNames(
    'faq section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'faq-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const handleInputChange = (event) => {
    event.preventDefault();

    const target = event.target;
    const fieldName = target.name;
    const value = target.value;

    switch(fieldName) {
      case 'name': setName(value);
      break;
      case 'email': setEmail(value);
        validateEmail(event);
      break;
      case 'feedback': setFeedback(value);
      break;
    }
  };

  const validateEmail = (e) => {
    let email = e.target.value;
  
    if (validator.isEmail(email)) {
      setEmailError(null);
    } else {
      setEmailError('Enter a valid Email!');
    }
  };

  const sendMessage = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: name + " (" + email + ")",
      to_name: 'sunrisemodelpublicschool@gmail.com',
      message: feedback
    };
    emailJs("service_964m1ze", "template_oph72fn", templateParams)
      .then(
        function(response) {
          addToast('Message sent successfully!', { appearance: 'success' });
        },
        function(err) {
          addToast(`Error: ${err.text}`, { appearance: 'error' });
        }
      );
      setName('');
      setEmail('');
      setFeedback('');
  };

  useEffect(() => {
    toggleButton();
  });

  const toggleButton = () => {
    setEnableButton(true);
    if (name.length !== 0 && feedback.length !== 0 && emailError === null) {
      setEnableButton(false);
    }
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className="faq-content">
            <h3 className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
              Have Questions? <span className="text-color-primary">We’re here to help!</span>
            </h3>
            <form className="reveal-from-bottom" data-reveal-delay="400">
              <input
                className="m-0 mb-12"
                id="name"
                name="name"
                type="text"
                onChange={(e) => handleInputChange(e)}
                placeholder="Your Name"
                required
                value={name}
                style={{ width: "100%" }}
              />
              <br />
              <input
                className="m-0 mb-12"
                id="email"
                name="email"
                type="email"
                onChange={(e) => handleInputChange(e)}
                placeholder="Your Email Address"
                required
                value={email}
                style={{ width: "100%" }}
              />
              <span style={{ fontWeight: 'bold', color: '#ec5959' }}>{emailError}</span>
              <br />
              <textarea
                className="m-0 mb-12"
                id="feedback"
                name="feedback"
                onChange={(e) => handleInputChange(e)}
                placeholder="Your Message"
                required
                value={feedback}
                style={{ width: "100%", height: "150px" }}
              />
              <br />
              <button
                type="button"
                className="button button-primary button-wide-mobile"
                disabled={enableButton}
                onClick={(e) => sendMessage(e)}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

Faqs.propTypes = propTypes;
Faqs.defaultProps = defaultProps;

export default Faqs;