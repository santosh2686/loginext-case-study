import React from 'react'
import { func, shape, string } from 'prop-types'

import { bemClass } from '@utils'

import UserDetail from '@components/user-detail'
import UserAction from '@components/user-action'

import './style.scss'

const blk = 'user-card'

const UserCard = ({
  user,
  likedUserMap,
  toggleLike,
  updateUser,
  deleteUser,
}) => {
  const { username } = user
  return (
    <div className={blk}>
      <div className={bemClass([blk, 'container'])}>
        <div className={bemClass([blk, 'avatar'])}>
          <img
            alt={username}
            src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
            className={bemClass([blk, 'image'])}
          />
        </div>
        <UserDetail user={user} />
        <UserAction
          user={user}
          likedUserMap={likedUserMap}
          toggleLike={toggleLike}
          updateUser={updateUser}
          deleteUser={deleteUser}
        />
      </div>
    </div>
  )
}

UserCard.propTypes = {
  user: shape({
    username: string,
  }),
  likedUserMap: shape({}),
  toggleLike: func,
  updateUser: func,
  deleteUser: func,
}

UserCard.defaultProps = {
  user: {},
  likedUserMap: {},
  toggleLike: () => {},
  updateUser: () => {},
  deleteUser: () => {},
}

export default UserCard
