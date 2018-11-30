/* ============
 * State of the lang module
 * ============
 *
 * The initial state of the lang module.
 */
import Cookies from 'js-cookie'
const { locale, locales } = window.config

export default {
  locale: Cookies.get('locale') || locale,
  locales: locales
}
