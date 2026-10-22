import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-content">
            <h3 className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
              Join <span className="text-color-primary">Sun Rise Public School</span> today and shape a brighter future for your child.
            </h3>
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Contact us to learn more about our programs and facilities.
            </p>
          </div>
          <div className="cta-action">
            <a href="/contact" className="button button-primary button-wide-mobile">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;