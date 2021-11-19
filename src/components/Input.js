import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Input = ({ type, placeholder, src, alt, margin }) => {

  const Field = styled.input`
   background-color: transparent;
   border: none;
   width: 100%;
   padding: 16px 0;
   margin-left: 7%;
   font-size: 16px;
   color: #FFFFFF;
    &::placeholder {
      font-size: 16px;
      color: #FFFFFF;
    }
    &:focus {
      outline: none;
    }
&:focus::-webkit-input-placeholder { 
  color:transparent; 
}

  `

  const Icon = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-right: 4%;
  `

  const Box = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
   border-radius: 50px;
    border: 1px solid #FFFFFF;
    height: 60px;
    width: 100%;
    margin: ${margin};
  
`

  return (
    <Box margin={margin}>
      <Field type={type} placeholder={placeholder} />
      <Icon><img src={src} alt={alt} /></Icon>
    </Box>
  )
}

Text.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Input


