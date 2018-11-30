/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

import * as ROUTES from '../constant/routes'
import agreement from './agreement'
import dashboard from './dashboard'
import settings from './settings'

export default [
  {
    path: '/',
    name: ROUTES.ROOT,
    component: () => import('@/views/home/Home.vue')
  },
  ...agreement,
  ...dashboard,
  ...settings,
  {
    name: ROUTES.LOGIN,
    path: ROUTES.LOGIN_PATH,
    component: () => import('@/views/auth/Login.vue')
  },
  {
    path: '*',
    redirect: ROUTES.ROOT_PATH
  }
]
