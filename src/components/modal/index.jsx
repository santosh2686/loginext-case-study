import React, { PureComponent } from 'react'
import { string, func, node } from 'prop-types'

import { bemClass } from '@utils'

import './style.scss'

const blk = 'modal'

class Modal extends PureComponent {
  state = {
    inClass: false,
  }

  componentDidMount() {
    this.setState({ inClass: false })
    setTimeout(() => {
      this.setState({ inClass: true })
    }, 0)
  }

  closeModal = () => {
    const { closeHandler } = this.props
    this.setState({ inClass: false })
    setTimeout(() => {
      closeHandler()
    }, 300)
  }

  render() {
    const {
      title, children,
    } = this.props

    const { inClass } = this.state

    const modalClass = bemClass([blk, {
      in: !!inClass,
    }])

    const containerClass = bemClass([blk, 'content', {
      in: !!inClass,
    }])

    const childrenWithProps = React.Children.map(children, (child) => React.cloneElement(child, { closeModal: this.closeModal }))

    return (
      <div className={modalClass}>
        <div className={containerClass}>
          {title && (
            <div className={bemClass([blk, 'header'])}>
              <h4>{title}</h4>
              <button
                type="button"
                className={bemClass([blk, 'close'])}
                onClick={this.closeModal}
              >
                &times;
              </button>
            </div>
          )}
          {childrenWithProps}
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  title: string,
  closeHandler: func,
  children: node.isRequired,
}

Modal.defaultProps = {
  title: '',
  closeHandler: () => {},
}

export default Modal
