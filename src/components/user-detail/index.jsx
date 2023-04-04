import React from 'react'
import { shape, string } from 'prop-types'

import { bemClass } from '@utils'

import Icon from '@components/icon'

import './style.scss'

const blk = 'user-detail'

const UserDetail = ({ user }) => {
  const {
    name, email, phone, website,
  } = user
  const websiteUrl = `http://www.${website}`
  return (
    <div className={blk}>
      <h4 className={bemClass([blk, 'title'])}>
        {name}
      </h4>
      <p className={bemClass([blk, 'section'])}>
        <Icon name="envelope" size="small" />
        <span className={bemClass([blk, 'label'])}>{email}</span>
      </p>
      <p className={bemClass([blk, 'section'])}>
        <Icon name="phone" size="small" />
        <span className={bemClass([blk, 'label'])}>{phone}</span>
      </p>
      <p className={bemClass([blk, 'section'])}>
        <Icon name="globe" size="small" />
        <a target="_blank" rel="noreferrer" href={websiteUrl} className={bemClass([blk, 'label'])}>
          {websiteUrl}
        </a>
      </p>
    </div>
  )
}

UserDetail.propTypes = {
  user: shape({
    username: string,
  }),
}

UserDetail.defaultProps = {
  user: {},
}

export default UserDetail
