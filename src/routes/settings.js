/* ============
 * Routes File
 * ============
 *
 * The routes and redirects for "profile" are defined in this file.
 */

import * as ROUTES from '../constant/routes'

export default [
  {
    path: ROUTES.SETTINGS_PATH,
    component: () => import('@/views/settings/Index.vue'),
    meta: {
      auth: true
    },
    children: [
      {
        name: ROUTES.PROFILE,
        path: ROUTES.PROFILE_PATH,
        component: () => import('@/views/settings/Profile.vue')
      },
      {
        name: ROUTES.PASSWORD,
        path: ROUTES.PASSWORD_PATH,
        component: () => import('@/views/settings/Password.vue')
      }
    ]
  }
]
