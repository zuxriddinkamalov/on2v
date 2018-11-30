/* ============
 * Getters for the auth module
 * ============
 *
 * The getters that are available on the
 * auth module.
 */
const user = state => state.user
const token = state => state.token
const check = state => state.user !== null

export default {
  user,
  token,
  check
}
