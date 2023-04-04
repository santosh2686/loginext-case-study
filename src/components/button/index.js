import React, { memo } from 'react'
import {
  bool, func, node, string,
} from 'prop-types'

import { bemClass } from '@utils'

import './style.scss'

const blk = 'button'

const Button = ({
  children,
  type,
  category,
  className,
  disabled,
  isBlock,
  loading,
  clickHandler,
}) => {
  const eltClassName = bemClass([blk, {
    [category]: category,
    loading,
    block: isBlock,
    [`${category}-loading`]: loading,
    disabled,
  }, className])

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={eltClassName}
      disabled={disabled}
      onClick={clickHandler}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: node.isRequired,
  type: string,
  category: string,
  disabled: bool,
  loading: bool,
  isBlock: bool,
  className: string,
  clickHandler: func,
}

Button.defaultProps = {
  type: 'button',
  category: 'primary',
  disabled: false,
  loading: false,
  isBlock: false,
  className: null,
  clickHandler: () => {},
}

export default memo(Button)
