import React, { useState, useEffect } from 'react'
import update from 'immutability-helper'

import Header from '@components/header'
import Footer from '@components/footer'
import UserList from '@components/user-list'
import Modal from '@components/modal'
import Spinner from '@components/spinner'

import UpdateUser from '@components/update-user'
import DeleteConfirmation from '@components/delete-confirmation'

import { user } from '@api'

import './style.scss'

const Home = () => {
  const [isLoading, updateLoading] = useState(true)
  const [userList, updateList] = useState([])

  const [likedUserMap, updateLikedUserMap] = useState({})
  const [idToBeDeleted, setUserIdForDelete] = useState('')
  const [userDetail, setUserDetail] = useState({})

  const [showModal, toggleModal] = useState(false)
  const [deleteConfirmation, toggleDeleteConfirmation] = useState(false)

  const toggleLike = (id) => {
    const updatedMap = update(likedUserMap, {
      $toggle: [id],
    })
    updateLikedUserMap(updatedMap)
  }

  const changeHandler = (valueObj) => {
    const updatedDetails = update(userDetail, {
      $merge: valueObj,
    })
    setUserDetail(updatedDetails)
  }

  const updateUser = (userDetail) => {
    setUserDetail(userDetail)
    toggleModal(true)
  }

  const deleteUser = (id) => {
    setUserIdForDelete(id)
    toggleDeleteConfirmation(true)
  }

  const updateHandler = () => {
    const { id: userId } = userDetail
    const recordIndex = userList.findIndex(({ id }) => id === userId)
    const updatedUserList = update(userList, {
      [recordIndex]: {
        $set: userDetail,
      },
    })
    updateList(updatedUserList)
  }

  const deleteSuccess = () => {
    const recordIndex = userList.findIndex(({ id }) => id === idToBeDeleted)
    const updatedUserList = update(userList, {
      $splice: [[recordIndex, 1]],
    })
    updateList(updatedUserList)
  }

  useEffect(() => {
    user.getAll().then((res) => {
      updateLoading(false)
      updateList(res.data)
    })
  }, [])

  if (isLoading) {
    return (
      <div className="loader">
        <Spinner size="large" />
      </div>
    )
  }

  return (
    <>
      <Header />
      <UserList
        userList={userList}
        likedUserMap={likedUserMap}
        toggleLike={toggleLike}
        updateUser={updateUser}
        deleteUser={deleteUser}
      />

      <Footer />

      {showModal && (
        <Modal title="Update user" closeHandler={() => toggleModal(false)}>
          <UpdateUser
            userDetail={userDetail}
            changeHandler={changeHandler}
            updateHandler={updateHandler}
          />
        </Modal>
      )}

      {deleteConfirmation && (
        <Modal closeHandler={() => toggleDeleteConfirmation(false)}>
          <DeleteConfirmation
            idToBeDeleted={idToBeDeleted}
            deleteSuccess={deleteSuccess}
          />
        </Modal>
      )}
    </>
  )
}

export default Home
