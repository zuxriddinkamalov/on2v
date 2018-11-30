/* ============
 * Routes File
 * ============
 *
 * The routes and redirects for agreement are defined in this file.
 */

import * as ROUTES from '../constant/routes'

export default [
  {
    name: ROUTES.AGREEMENT,
    path: ROUTES.AGREEMENT_PATH,
    component: () => import('@/views/agreement/Index.vue'),
    meta: {
      auth: true
    }
  }
]
