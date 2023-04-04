import React, { memo } from 'react'
import {
  string, oneOf,
} from 'prop-types'

import { bemClass } from '@utils'

import './style.scss'

const blk = 'icon'

const Icon = ({
  name, className, color, size, iconScale,
}) => {
  const eltClass = bemClass([
    blk,
    {
      [color]: !!color,
      [size]: !!size,
    },
    className,
  ])

  const iconClass = `fa fa-${name} fa-${iconScale}`

  return (
    <span className={eltClass}>
      <i className={iconClass} />
    </span>
  )
}

Icon.propTypes = {
  name: string.isRequired,
  className: string,
  color: string,
  size: oneOf(['small', 'medium', 'large']),
  iconScale: string,
}

Icon.defaultProps = {
  className: '',
  color: 'primary',
  size: 'medium',
  iconScale: '1x',
}

export default memo(Icon)
