import React from 'react'
import { shape, string, func } from 'prop-types'

import { bemClass } from '@utils'

import Icon from '@components/icon'

import './style.scss'

const blk = 'user-action'

const UserAction = ({
  user,
  likedUserMap,
  toggleLike,
  updateUser,
  deleteUser,
}) => {
  const { id: userId } = user
  const isLiked = !!likedUserMap[userId]
  const heartIcon = isLiked ? 'heart' : 'heart-o'
  return (
    <div className={blk}>
      <button
        type="button"
        className={bemClass([blk, 'btn'])}
        onClick={() => toggleLike(userId)}
      >
        <Icon name={heartIcon} size="small" color="success" />
      </button>
      <button
        type="button"
        className={bemClass([blk, 'btn'])}
        onClick={() => updateUser(user)}
      >
        <Icon name="pencil" size="small" />
      </button>
      <button
        type="button"
        className={bemClass([blk, 'btn'])}
        onClick={() => deleteUser(userId)}
      >
        <Icon name="trash" size="small" color="error" />
      </button>
    </div>
  )
}

UserAction.propTypes = {
  user: shape({
    username: string,
  }),
  likedUserMap: shape({}),
  toggleLike: func,
  updateUser: func,
  deleteUser: func,
}

UserAction.defaultProps = {
  user: {},
  likedUserMap: {},
  toggleLike: () => {},
  updateUser: () => {},
  deleteUser: () => {},
}

export default UserAction
