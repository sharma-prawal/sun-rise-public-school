/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

import Cta from '../../components/sections/Cta';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const ContactInformation = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
 
  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
              How to contact <span className="text-color-primary">us?</span>
            </h1>
            <div className="container-xs">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="button button-primary">Submit</button>
              </form>
            </div>
            <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <span className="text-color-primary">Directions!</span>
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13538.604470196291!2d76.3790581!3d31.9703603!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b356a95f6585b%3A0xe76f175dfd6bbb58!2sSun%20Rise%20Model%20Public%20School!5e0!3m2!1sen!2sin!4v1616910511312!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{"border" : 0}}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

ContactInformation.propTypes = propTypes;
ContactInformation.defaultProps = defaultProps;

export default ContactInformation;