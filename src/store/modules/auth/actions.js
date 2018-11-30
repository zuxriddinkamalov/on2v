/* ============
 * Actions for the lang module
 * ============
 *
 * The actions that are available on the
 * lang module
 */
import axios from '@/plugins/axios'
import {
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  LOGOUT,
  SAVE_TOKEN,
  UPDATE_USER
} from './mutation-types'

const saveToken = ({ commit, dispatch }, payload) => {
  commit(SAVE_TOKEN, payload)
}

const fetchUser = async ({ commit }) => {
  try {
    const { data } = await axios.get(window.api + '/api/user')

    commit(FETCH_USER_SUCCESS, { user: data })
  } catch (e) {
    commit(FETCH_USER_FAILURE)
  }
}

const updateUser = ({ commit }, payload) => {
  commit(UPDATE_USER, payload)
}

const logout = async ({ commit }) => {
  try {
    await axios.post(window.api + '/api/logout')
  } catch (e) {}
  commit(LOGOUT)
}

const fetchOauthUrl = async (ctx, { provider }) => {
  const { data } = await axios.post(window.api + `/api/oauth/${provider}`)

  return data.url
}

export default {
  saveToken,
  fetchUser,
  updateUser,
  logout,
  fetchOauthUrl
}
