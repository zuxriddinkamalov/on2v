/* ============
 * Actions for the lang module
 * ============
 *
 * The actions that are available on the
 * lang module
 */
import Cookies from 'js-cookie'
import { SET_LOCALE } from './mutation-types'

const setLocale = ({ commit }, { locale }) => {
  commit(SET_LOCALE, { locale })
  Cookies.set('locale', locale, { expires: 365 })
}

export default {
  setLocale
}
