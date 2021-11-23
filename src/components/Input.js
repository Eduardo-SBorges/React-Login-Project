import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Field = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 16px 0;
  margin-left: 7%;
  font-size: ${(props) => props.fontSize};
  letter-spacing: ${(props) => props.letterSpacing};
  color: #ffffff;
  &::placeholder {
    font-size: 16px;
    color: #ffffff;
  }
  &:focus {
    outline: none;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;

const Icon = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 4%;
`;

const Box = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  border: 1px solid #ffffff;
  border-color: ${(props) => props.borderColor};
  height: 60px;
  width: 100%;
  margin: ${(props) => props.margin};
`;

const Input = ({
  type,
  placeholder,
  src,
  alt,
  margin,
  borderColor,
  fontSize,
  letterSpacing,
  onChange,
  value,
}) => {
  return (
    <Box margin={margin} borderColor={borderColor}>
      <Field
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        fontSize={fontSize}
        letterSpacing={letterSpacing}
        value={value}
      />
      <Icon>
        <img src={src} alt={alt} />
      </Icon>
    </Box>
  );
};

Text.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
  borderColor: PropTypes.string,
  letterSpacing: PropTypes.string,
};

Text.defaultProps = {
  fontSize: '16px',
  letterSpacing: '0',
};

export default Input;
