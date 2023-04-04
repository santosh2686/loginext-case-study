import React from 'react'
import {
  arrayOf, func, shape, string,
} from 'prop-types'

import './style.scss'

import UserCard from '@components/user-card'

const UserList = ({
  userList,
  likedUserMap,
  toggleLike,
  updateUser,
  deleteUser,
}) => (
  <div className="user-list">
    {userList.map((user) => (
      <UserCard
        key={user.username}
        user={user}
        likedUserMap={likedUserMap}
        toggleLike={toggleLike}
        updateUser={updateUser}
        deleteUser={deleteUser}
      />
    ))}
  </div>
)

UserList.propTypes = {
  userList: arrayOf(shape({
    username: string,
  })),
  likedUserMap: shape({}),
  toggleLike: func,
  updateUser: func,
  deleteUser: func,
}

UserList.defaultProps = {
  userList: [],
  likedUserMap: {},
  toggleLike: () => {},
  updateUser: () => {},
  deleteUser: () => {},
}

export default UserList
