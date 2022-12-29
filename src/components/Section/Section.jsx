import React from 'react';
import PropTypes from 'prop-types';

import { FeedbackSection, Title } from '../Section/Section.styled';

export const Section = ({ title, children }) => (
  <FeedbackSection>
    <Title>{title}</Title>
    {children}
  </FeedbackSection>
);

Section.propTypes = {
  title: PropTypes.string,
};
