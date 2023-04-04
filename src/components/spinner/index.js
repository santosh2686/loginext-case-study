import React from 'react'
import { oneOf, string } from 'prop-types'

import { bemClass } from '@utils'

import './style.scss'

const blk = 'spinner'

const Spinner = ({
  category,
  size,
  className,
}) => {
  const eltClassName = bemClass([blk, {
    [category]: category,
    [size]: size,
  }, className])

  return (
    <div className={eltClassName} />
  )
}

Spinner.propTypes = {
  category: oneOf(['primary', 'secondary']),
  size: oneOf(['small', 'medium', 'large']),
  className: string,
}

Spinner.defaultProps = {
  category: 'primary',
  size: 'medium',
  className: '',
}

export default Spinner
