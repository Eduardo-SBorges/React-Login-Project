import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Paragraph = styled.p`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  /* font-family: 'Mark Pro'; */
  font-family: 'Poppins', sans-serif;
  /* font-family: 'Open Sans', sans-serif; */
  font-weight: ${(props) => props.weight};
  margin: ${(props) => props.margin};
`;

const Text = ({ text, size, color, weight, margin }) => {
  return (
    <Paragraph
      size={size}
      color={color}
      weight={weight}
      margin={margin}
      data-testid="test-text-component"
    >
      {text}
    </Paragraph>
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string,
  weight: PropTypes.string,
  margin: PropTypes.string
};

Text.defaultProps = {
  weight: '400',
  color: '#fff',
};

export default Text;
