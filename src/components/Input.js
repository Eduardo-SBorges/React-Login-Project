import React from 'react'
import styled  from 'styled-components'
import PropTypes from 'prop-types'

const Input = ({type, placeholder, src, alt}) => {

  const Field = styled.input`
    background-color: transparent;
    border-radius: 50px;
    border: 1px solid #FFFFFF;
    height: 60px;
    width: 50%;
    &::placeholder {
      padding-left: 20px;
      font-size: 16px;
    }
  `

  const Icon = styled.div`
    position: absolute;
    left: 47%;
    display: inline-block;
    vertical-align: middle;
  `

const Box = styled.div`
  width: auto;
  height: 60px;
  display: flex;
  align-items: center;
`

  return (
    <Box>
    <Field type={type} placeholder={placeholder}/> 
    <Icon><img src={src} alt={alt}/></Icon>
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


