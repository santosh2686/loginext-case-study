import React from 'react'
import {
  oneOfType, string, element, arrayOf, number, node,
} from 'prop-types'

import { bemClass } from '@utils'

import './style.scss'

const blk = 'column'

const Column = ({ children, col, className }) => {
  const eltClass = bemClass([
    blk,
    {
      [col]: !!col,
    },
    className,
  ])
  return (
    <div className={eltClass}>
      {children}
    </div>
  )
}

Column.propTypes = {
  children: oneOfType([
    element,
    arrayOf(element),
    node,
    arrayOf(node),
  ]).isRequired,
  className: string,
  col: number.isRequired,
}

Column.defaultProps = {
  className: '',
}

export default Column
