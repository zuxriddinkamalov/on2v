<template>
    <VBody>
        <div class="container">
            <el-card class="login-card">
                <div slot="header" class="clearfix">
                    <span>{{ $t('Caller ID registration') }}</span>
                </div>
                <el-form :show-message="false" :model="form" ref="registerForm" label-width="150px">
                    <el-form-item
                        :label="$t('Phone')"
                        prop="phone"
                        :rules="[
                            { required: true, trigger: 'blur' },
                        ]">
                        <el-input v-model="form.phone"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-row :gutter="10" type="flex" align="middle" justify="space-betwen">
                            <el-col :xs="12" :sm="8">
                                <el-radio v-model="form.register" label="SMS">{{ $t('SMS authentication') }}</el-radio>
                            </el-col>
                            <el-col :xs="12" :sm="8">
                                <el-radio v-model="form.register" label="VMS">{{ $t('Phone verification') }}</el-radio>
                            </el-col>
                            <el-col :xs="12" :sm="8" style="text-align: right;">
                                <el-button type="primary" @click="registerPhone('registerForm')">{{ $t('Register phone') }}</el-button>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item>
                    </el-form-item>
                </el-form>
                <el-form :show-message="false" :model="form" ref="sendForm" label-width="150px">
                    <el-form-item
                        :label="$t('Verification code (received via SMS)')"
                        prop="code"
                        :rules="[
                            { required: true, trigger: 'blur' },
                        ]">
                        <el-input v-model="form.code"></el-input>
                    </el-form-item>
                    <el-form-item style="text-align: right">
                        <el-button type="primary" @click="sendCode('sendForm')">{{ $t('Send code') }}</el-button>
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
      title: this.$t('Caller ID Registration')
    }
  },
  data: () => ({
    form: {
      phone: '',
      register: 'SMS',
      code: ''
    }
  }),
  methods: {
    registerPhone (ref) {
      this.$refs[ref].validate((valid, error) => {
        if (valid) {
          let formData = new FormData()
          formData.append('phone', this.form.phone)
          formData.append('register', this.form.register)
          this.$ploading()
          axios.post(window.api + `/api/phone/register`, formData)
            .then(response => {
              this.$message({
                type: 'success',
                message: this.$t('Successfully registered')
              })
            })
            .catch(e => {
              if (e.response === undefined) {
                this.$message({
                  type: 'error',
                  message: this.$t('server_error')
                })
              } else {
                this.$message({
                  type: 'error',
                  message: this.$t('Unable register')
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
    },
    sendCode (ref) {
      this.$refs[ref].validate((valid, error) => {
        if (valid) {
          let formData = new FormData()
          formData.append('email', this.form.email)
          formData.append('password', this.form.password)
          formData.append('code', this.form.code)
          this.$ploading()
          axios.post(window.api + `/api/login`, formData)
            .then(response => {
              this.$message({
                type: 'success',
                message: this.$t('Successfully sended')
              })
            })
            .catch(e => {
              if (e.response === undefined) {
                this.$message({
                  type: 'error',
                  message: this.$t('server_error')
                })
              } else {
                this.$message({
                  type: 'error',
                  message: this.$t('login_error')
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
  components: {
    VBody
  }
}
</script>

<style lang="sass" scoped>

</style>
