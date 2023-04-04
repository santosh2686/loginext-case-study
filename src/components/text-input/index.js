import React, { PureComponent } from 'react'
import {
  string, bool, func, number, oneOfType,
} from 'prop-types'

import { bemClass } from '@utils'

import './style.scss'

const blk = 'text-input'

class TextInput extends PureComponent {
  changeHandler = ({ target: { value } }) => {
    const { changeHandler, name } = this.props
    changeHandler({ [name]: value })
  }

  render() {
    const {
      type, label, value, disabled, invalid,
      className, controlClassName,
      maxLength,
    } = this.props

    const eltClass = bemClass([blk, {}, className])

    const textFieldClass = bemClass([blk, 'control', {
      invalid: !!invalid,
    }, controlClassName])

    return (
      <div className={eltClass}>
        <label className={bemClass([blk, 'label'])}>
          <span className={bemClass([blk, 'star'])}>*</span>
          {label}
          :
        </label>
        <input
          type={type}
          className={textFieldClass}
          value={value}
          maxLength={maxLength}
          disabled={disabled}
          onChange={this.changeHandler}
        />
      </div>
    )
  }
}

TextInput.propTypes = {
  type: string,
  label: string,
  disabled: bool,
  invalid: bool,
  value: oneOfType([string, number]),
  name: string,
  className: string,
  controlClassName: string,
  maxLength: number,
  changeHandler: func,
}

TextInput.defaultProps = {
  type: 'text',
  label: '',
  disabled: false,
  invalid: false,
  value: '',
  name: '',
  className: '',
  maxLength: 300,
  controlClassName: '',
  changeHandler: () => {},
}

export default TextInput
