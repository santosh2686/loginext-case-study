import React from 'react'
import {
  oneOfType, string, element, arrayOf, node,
} from 'prop-types'

import { bemClass } from '@utils'

import './style.scss'

const blk = 'row'

const Row = ({ children, className }) => {
  const eltClass = bemClass([blk, {}, className])
  return (
    <div className={eltClass}>
      {children}
    </div>
  )
}

Row.propTypes = {
  children: oneOfType([
    element,
    arrayOf(element),
    node,
    arrayOf(node),
  ]).isRequired,
  className: string,
}

Row.defaultProps = {
  className: '',
}

export default Row
