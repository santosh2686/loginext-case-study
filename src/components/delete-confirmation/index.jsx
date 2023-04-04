import React, { useState } from 'react'
import { func, number } from 'prop-types'

import { bemClass } from '@utils'
import { user } from '@api'

import Button from '@components/button'

import './style.scss'

const blk = 'delete-confirmation'

const DeleteConfirmation = ({ closeModal, idToBeDeleted, deleteSuccess }) => {
  const [isLoading, setLoading] = useState(false)
  const deleteUser = () => {
    setLoading(true)
    user.delete(idToBeDeleted).then(() => {
      setLoading(false)
      closeModal()
      deleteSuccess()
    })
  }

  return (
    <div className={blk}>
      <div className={bemClass([blk, 'icon'])}>!</div>
      <h4 className={bemClass([blk, 'title'])}>Are you sure?</h4>
      <p className={bemClass([blk, 'message'])}>
        This action cannot be undone and will delete the record.
      </p>
      <div className={bemClass([blk, 'footer'])}>
        <Button
          category="secondary"
          className={bemClass([blk, 'btn'])}
          clickHandler={closeModal}
        >
          Cancel
        </Button>
        <Button
          category="error"
          className={bemClass([blk, 'btn'])}
          clickHandler={deleteUser}
          loading={isLoading}
        >
          Delete
        </Button>
      </div>
    </div>
  )
}

DeleteConfirmation.propTypes = {
  closeModal: func,
  deleteSuccess: func,
  idToBeDeleted: number.isRequired,
}

DeleteConfirmation.defaultProps = {
  closeModal: () => {},
  deleteSuccess: () => {},
}

export default DeleteConfirmation
