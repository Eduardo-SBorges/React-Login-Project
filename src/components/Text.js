import React from 'react'
import styled  from 'styled-components'
import PropTypes from 'prop-types'

const Text = ({text, size, color, weight, margin, display, top, ...props}) => {
  const Paragraph = styled.p`
  font-size: ${size};
  color: ${color};
  font-family: 'Mark Pro';
  font-weight: ${weight};
  margin: ${margin};
  display: ${display};
  top: ${top};
`

  return (
    <Paragraph size={size} color={color} margin={margin} weight={weight} 
    display={display} top={top} {...props}>{text}</Paragraph>
  )
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  weight: PropTypes.string,
  margin: PropTypes.string,
  display: PropTypes.string,
  top: PropTypes.string,
}

Text.defaultProps = {
  weight: "400"
}

export default Text;