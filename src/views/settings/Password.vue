<template>
    <VBody>
        <div class="password-container">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>{{ $t('Edit password') }}</span>
                </div>
                <el-form :show-message="false" :model="form" :rules="formRules" ref="editPassword" label-width="100px">
                    <el-form-item
                        :label="$t('Password')"
                        prop="email">
                        <el-input type="password" v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item
                        :label="$t('Confirm')"
                        prop="password_confirmation">
                        <el-input type="password" v-model="form.password_confirmation"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="login('editPassword')">{{ $t('Save') }}</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
    </VBody>
</template>

<script>
import axios from '@/plugins/axios'
import VBody from '@/components/VBody'
import { prepareValidateErrors } from '../../helpers/errors'

export default {
  metaInfo () {
    return {
      title: this.$t('Edit password')
    }
  },
  data: () => {
    return {
      form: {
        password_confirmation: '',
        password: ''
      }
    }
  },
  methods: {
    login (ref) {
      this.$refs[ref].validate((valid, error) => {
        if (valid) {
          let formData = new FormData()
          formData.append('password_confirmation', this.form.password_confirmation)
          formData.append('password', this.form.password)
          this.$ploading()
          axios.post(window.api + `/api/settings/password`, formData)
            .then()
            .catch(e => {
              if (e.response === undefined) {
                this.$message({
                  type: 'error',
                  message: this.$t('server_error')
                })
              } else {
                this.$message({
                  type: 'error',
                  message: this.$t('password_error')
                })
              }
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
  computed: {
    formRules: function () {
      let validatePass1 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error(this.$t('Enter password')))
        } else {
          if (this.form.password_confirmation !== '') {
            this.$refs.editPassword.validateField('password_confirmation')
          }
          callback()
        }
      }
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error(this.$t('Enter confirm password')))
        } else if (value !== this.form.password) {
          callback(new Error(this.$t('Passwords don`t match')))
        } else {
          callback()
        }
      }
      return {
        password: [
          { validator: validatePass1, trigger: 'blur' }
        ],
        password_confirmation: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    VBody
  }
}
</script>

<style lang="sass" scoped>

</style>
