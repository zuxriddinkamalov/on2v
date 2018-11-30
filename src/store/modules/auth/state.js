/* ============
 * State of the auth module
 * ============
 *
 * The initial state of the auth module.
 */
import Cookies from 'js-cookie'

export default {
  user: null,
  token: Cookies.get('token')
}
