import React from 'react'
import styled  from 'styled-components'
import PropTypes from 'prop-types'

const Text = ({text, size, color, weight}) => {
  const Paragraph = styled.p`
  font-size: ${size};
  color: ${color};
  font-family: 'Mark Pro';
  font-weight: ${weight};
`

  return (
    <Paragraph size={size} color={color} weight={weight}>{text}</Paragraph>
  )
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

Text.defaultProps = {
  weight: "400"
}

export default Text