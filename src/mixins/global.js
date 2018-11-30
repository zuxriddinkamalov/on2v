/* ============
 * Useful mixin
 * ============
 *
 */

import { SET_LOADING } from '../store/modules/main/mutation-types'

export default {
  methods: {
    $ploading: function (status = true) {
      this.$store.commit(SET_LOADING, status)
    }
  }
}
