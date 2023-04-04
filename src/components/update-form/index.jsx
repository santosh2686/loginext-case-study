import React from 'react'
import { func, shape, string } from 'prop-types'

import TextInput from '@components/text-input'

import './style.scss'

const blk = 'update-form'

const UpdateForm = ({
  userDetail,
  errors,
  changeHandler,
}) => {
  const {
    name, phone, email, website,
  } = userDetail
  return (
    <div className={blk}>
      <TextInput
        label="Name"
        name="name"
        value={name}
        invalid={!!errors.name}
        changeHandler={changeHandler}
      />
      <TextInput
        label="Phone"
        name="phone"
        value={phone}
        invalid={!!errors.phone}
        changeHandler={changeHandler}
      />
      <TextInput
        label="Email"
        name="email"
        value={email}
        invalid={!!errors.email}
        changeHandler={changeHandler}
      />
      <TextInput
        label="Website"
        name="website"
        value={website}
        invalid={!!errors.website}
        changeHandler={changeHandler}
      />
    </div>
  )
}

UpdateForm.propTypes = {
  changeHandler: func,
  userDetail: shape({
    name: string,
  }),
  errors: shape({
    name: string,
  }),
}

UpdateForm.defaultProps = {
  changeHandler: () => {},
  errors: {},
  userDetail: {},
}

export default UpdateForm
