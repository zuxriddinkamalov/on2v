<template>
    <VBody>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('Profile') }}</span>
            </div>
            <el-form :show-message="false" :model="form" ref="profileForm" label-width="100px">
                <el-form-item
                    :label="$t('name')"
                    prop="name"
                    :rules="[
                    { required: true, trigger: 'blur' }
                ]">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item
                    :label="$t('email')"
                    prop="email"
                    :rules="[
                        { required: true, trigger: 'blur' },
                        { type: 'email', trigger: 'blur' },
                    ]">
                    <el-input type="email" v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="update('profileForm')">{{ $t('save') }}</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </VBody>
</template>
<script>
import axios from '@/plugins/axios'
import { mapGetters } from 'vuex'
import * as routes from '@/constant/routes'
import VBody from '@/components/VBody'
import { prepareValidateErrors } from '../../helpers/errors'

export default {
  metaInfo () {
    return {
      title: this.$t('Login')
    }
  },
  data: () => ({
    routes: routes.PASSWORD_RESET_PATH,
    form: {
      email: '',
      name: ''
    }
  }),
  computed: mapGetters({
    user: 'auth/user'
  }),
  watch: {
    user: {
      deep: true,
      immediate: true,
      handler: function (value) {
        this.form.name = this.$R.prop('name', value)
        this.form.email = this.$R.prop('email', value)
      }
    }
  },
  methods: {
    update (ref) {
      this.$refs[ref].validate((valid, error) => {
        if (valid) {
          let formData = new FormData()
          formData.append('email', this.form.email)
          formData.append('name', this.form.name)
          this.$ploading()
          axios.put(window.api + `/api/settings/profile`, formData)
            .then(response => {
              this.$store.dispatch('auth/updateUser', { user: response })
            })
            .catch(e => {
              this.$message({
                type: 'error',
                message: this.$t('server_error')
              })
            }).finally(() => {
              this.$ploading(false)
            })
        } else {
          let message = prepareValidateErrors(error)
          this.$message({
            dangerouslyUseHTMLString: true,
            type: 'error',
            message: message
          })
        }
      })
    }
  },
  components: {
    VBody
  }
}
</script>

<style lang="sass" scoped>
</style>
