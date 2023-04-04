import React, { useState } from 'react'
import {
  func, shape, string,
} from 'prop-types'

import { bemClass, validatePayload } from '@utils'
import { user } from '@api'

import Button from '@components/button'
import UpdateForm from '@components/update-form'

import validationSchema from './validation/schema'

import './style.scss'

const blk = 'update-user'

const UpdateUser = ({
  closeModal, userDetail, changeHandler, updateHandler,
}) => {
  const [isLoading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const updateUser = () => {
    const { isValid, errorMap } = validatePayload(validationSchema, userDetail)
    if (!isValid) {
      setErrors(errorMap)
      return
    }
    const { id } = userDetail
    setLoading(true)
    user.update(id, userDetail).then(() => {
      setLoading(false)
      closeModal()
      updateHandler()
    })
  }

  return (
    <div className={blk}>
      <UpdateForm
        userDetail={userDetail}
        errors={errors}
        changeHandler={changeHandler}
      />
      <div className={bemClass([blk, 'footer'])}>
        <Button
          category="secondary"
          clickHandler={closeModal}
        >
          Cancel
        </Button>
        <Button
          className={bemClass([blk, 'submit-btn'])}
          clickHandler={updateUser}
          loading={isLoading}
        >
          Update
        </Button>
      </div>
    </div>
  )
}

UpdateUser.propTypes = {
  closeModal: func,
  changeHandler: func,
  updateHandler: func,
  userDetail: shape({
    username: string,
  }),
}

UpdateUser.defaultProps = {
  closeModal: () => {},
  updateHandler: () => {},
  changeHandler: () => {},
  userDetail: {},
}

export default UpdateUser
