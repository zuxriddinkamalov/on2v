/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * auth.
 */
import Cookies from 'js-cookie'
import {
  SAVE_TOKEN,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  LOGOUT,
  UPDATE_USER
} from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SAVE_TOKEN] (state, { token, remember }) {
    state.token = token
    Cookies.set('token', token, { expires: remember ? 365 : null })
  },

  [FETCH_USER_SUCCESS] (state, { user }) {
    state.user = user
  },

  [FETCH_USER_FAILURE] (state) {
    state.token = null
    Cookies.remove('token')
  },

  [LOGOUT] (state) {
    state.user = null
    state.token = null
    Cookies.remove('token')
  },

  [UPDATE_USER] (state, { user }) {
    state.user = user
  }
}
