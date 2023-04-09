import React from 'react';
import PropTypes from 'prop-types';
import { SectionWraper, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWraper>
      <Title>{title}</Title>
      {children}
    </SectionWraper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
