<template>
    <VBody>
        <div class="container">

        </div>
    </VBody>
</template>

<script>
import axios from 'axios'
import * as routes from '@/constant/routes'
import VBody from '@/components/VBody'

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
      self.$ploading()
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
            })
        } else {

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
    padding: 30px 20px
    display: flex
    align-items: center
    flex: 1
    .login-container
        max-width: 600px
        margin: 0 auto
        background-color: #fff
        padding: 40px 30px 30px 10px
        border-radius: 5px
        box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.06)
</style>
