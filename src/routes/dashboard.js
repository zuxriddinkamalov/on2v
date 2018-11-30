/* ============
 * Routes File
 * ============
 *
 * The routes and redirects for "dashboard" are defined in this file.
 */

import * as ROUTES from '../constant/routes'

export default [
  {
    path: ROUTES.DASHBOARD_PATH,
    component: () => import('@/views/dashboard/Index.vue'),
    meta: {
      auth: true
    },
    children: [
      {
        name: ROUTES.DASHBOARD_CV,
        path: ROUTES.CV_PATH,
        component: () => import('@/views/dashboard/Cv.vue')
      },
      {
        name: ROUTES.DASHBOARD_INFO,
        path: ROUTES.INFO_PATH,
        component: () => import('@/views/dashboard/Info.vue')
      },
      {
        name: ROUTES.DASHBOARD_PHONE_REGISTER,
        path: ROUTES.PHONE_REGISTER_PATH,
        component: () => import('@/views/dashboard/PhoneRegister.vue')
      }
    ]
  }
]
