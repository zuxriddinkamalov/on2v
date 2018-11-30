<template>
    <VBody>
        <div class="container">
            <el-card class="login-card">
                <div slot="header" class="clearfix">
                    <span>{{ $t('User info') }}</span>
                </div>
                <table class="table table-hover" >
                    <thead>
                    <tr v-cloak>
                        <th>{{ $t('Name') }}</th>
                        <th>{{ user.name }}</th>
                    </tr>
                    <tr v-cloak>
                        <th>{{ $t('Email') }}</th>
                        <th>{{ $R.prop('email', user) }}</th>
                    </tr>
                    </thead>
                    <tbody v-cloak>
                    <tr class="info">
                        <td>{{ $t('Phone') }}</td>
                        <td>{{ $R.prop('phone', user) }}</td>
                    </tr>
                    <tr class="info">
                        <td>{{ $t('SMS count') }}</td>
                        <td>{{ $R.prop('sendSmsCount', user) }}</td>
                    </tr>
                    <tr class="info">
                        <td>{{ $t('Group count') }}</td>
                        <td>{{ $R.prop('groupCount', user) }}</td>
                    </tr>
                    <tr class="info">
                        <td>{{ $t('Number of customers') }}</td>
                        <td>{{ $R.prop('clientCount', user) }}</td>
                    </tr>
                    <tr class="info">
                        <td>{{ $t('Public videos') }}</td>
                        <td>{{ $R.prop('publicVideosCount', user) }}</td>
                    </tr>
                    <tr class="info">
                        <td>{{ $t('Private videos') }} </td>
                        <td>{{ $R.prop('privateVideosCount', user) }}</td>
                    </tr>
                    </tbody>
                </table>
            </el-card>
        </div>
    </VBody>
</template>

<script>
import axios from 'axios'
import VBody from '@/components/VBody'

export default {
  metaInfo () {
    return {
      title: this.$t('Login')
    }
  },
  data: () => ({
    user: {}
  }),
  mounted () {
    this.fetchUserData()
  },
  methods: {
    fetchUserData () {
      let self = this
      this.$ploading()
      axios.get(window.api + `/api/dashboard/user-info`)
        .then(response => {
          self.user = response.data
        })
        .catch(e => {
          this.$message({
            type: 'error',
            message: this.$t('server_error')
          })
        }).finally(() => {
          self.$ploading(false)
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
