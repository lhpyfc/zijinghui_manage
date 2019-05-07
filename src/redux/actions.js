import { reqLogin, reqUserList, reqAddUser, reqDeleteUser } from '../api/index'
import { RECEIVE_USER, RECEIVE_USERlIST, DELETE_USER } from './action-types'


const receiveUser = user => ({ type: RECEIVE_USER, data: user })
const receiveUserList = userList => ({ type: RECEIVE_USERlIST, data: userList })

export function login(postData) {
  return async dispatch => {
    const { code, data } = await reqLogin(postData)
    if (code === "0" && data) {
      dispatch(receiveUser(data))
    }
  }
}
export function getUserList(postData) {
  return async dispatch => {
    const { code, data } = await reqUserList(postData)
    if (code === "0" && data) {
      dispatch(receiveUserList(data))
    }
  }
}
export function toAdduser(user) {
  return async dispatch => {
    console.log(user)
    const { code, data } = await reqAddUser(user)
    if (code === "0" && data) {
      dispatch({ type: '', data: {} })
    }
  }
}
export function toDeleteUser(postData) {
  return async dispatch => {
    const { code, data } = await reqDeleteUser(postData)
    if (code === "0" && data) {
      dispatch({ type: DELETE_USER, data: postData.admin_id })
    }
  }
}