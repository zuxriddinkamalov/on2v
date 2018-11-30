<template>
    <VBody default-class="login-page">
        <div class="container">
            <el-card class="login-card">
                <div slot="header" class="clearfix">
                    <span>{{ $t('Login') }}</span>
                </div>
                <el-form :show-message="false" :model="form" ref="loginForm" label-width="100px">
                    <el-form-item
                        :label="$t('email')"
                        prop="email"
                        :rules="[
                            { required: true, trigger: 'blur' },
                            { type: 'email', trigger: 'blur' },
                        ]">
                        <el-input type="email" v-model="form.email"></el-input>
                    </el-form-item>
                    <el-form-item
                        :label="$t('password')"
                        prop="password"
                        :rules="[
                            { required: true, trigger: 'blur' },
                        ]">
                        <el-input type="password" v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-row :gutter="10">
                            <el-col :sm="12">
                                <el-checkbox v-model="remember" :label="$t('remember_me')"></el-checkbox>
                            </el-col>
                            <el-col :sm="12" class="text-right">
                                <router-link :to="{ name: routes.PASSWORD_RESET_PATH }" class="forgot-password">
                                    {{ $t('forgot_password') }}
                                </router-link>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="login('loginForm')">Submit</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
    </VBody>
</template>

<script>
import axios from '@/plugins/axios'
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
      password: ''
    },
    remember: false
  }),
  methods: {
    process (data) {
      let self = this
      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token,
        remember: this.remember
      })

      // Fetch the user.
      this.$ploading()
      this.$store.dispatch('auth/fetchUser').then(resolve => {
        self.$ploading(false)
      }, reject => {
        self.$ploading(false)
      })

      // Redirect home.
      this.$router.push({ name: routes.ROOT })
    },
    login (ref) {
      this.$refs[ref].validate((valid, error) => {
        if (valid) {
          let formData = new FormData()
          formData.append('email', this.form.email)
          formData.append('password', this.form.password)
          formData.append('remember', this.form.remember ? 'on' : 'of')
          this.$ploading()
          axios.post(window.api + `/api/login`, formData)
            .then(response => {
              this.process(response.data)
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
.login-page
    display: flex
    align-items: center
    flex: 1
    .login-card
        max-width: 600px
        margin: 0 auto
</style>
