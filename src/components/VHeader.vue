<template>
    <div class="navbar">
        <div class="container">
            <div class="header-logo"><router-link to="/"><img src="/images/logo.png" alt="" /></router-link></div>

            <div class="navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click.prevent>
                            {{ $t('sputtering') }}
                        </a>
                        <div class="dropdown-menu">
                            <router-link :to="{ name: 'sms.send' }">
                                {{ $t('election_molecule_scattering') }}
                            </router-link>
                            <router-link :to="{ name: 'sms.send' }">
                                {{ $t('advertising_molecule_sprinkling') }}
                            </router-link>
                            <router-link :to="{ name: 'sms.send' }">
                                {{ $t('spreading_common_characters') }}
                            </router-link>
                            <router-link :to="{ name: 'sms.result' }">
                                {{ $t('sprinkled_result') }}
                            </router-link>
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#" @click.prevent>
                            {{ $t('management') }}
                        </a>
                        <div class="dropdown-menu">
                            <router-link :to="{ name: 'clients' }">
                                {{ $t('customer_management') }}
                            </router-link>
                            <router-link :to="{ name: 'groups' }">
                                {{ $t('group_management') }}
                            </router-link>
                            <router-link :to="{ name: 'videos' }">
                                {{ $t('video_management') }}
                            </router-link>
                        </div>
                    </li>
                </ul>

                <ul class="navbar-nav">
                    <!-- Authenticated -->
                    <li v-if="user" class="nav-item dropdown">
                        <a class="nav-link" href="#">
                            <img :src="user.photo_url" class="profile-photo">
                            {{ user.name }}
                        </a>
                        <div class="dropdown-menu">
                            <router-link :to="{ name: routes.DASHBOARD_INFO }">
                                <i class="far fa-address-card"></i> {{ $t('dashboard') }}
                            </router-link>
                            <router-link :to="{ name: routes.PROFILE }">
                                <i class="fas fa-cog"></i> {{ $t('profile') }}
                            </router-link>

                            <a href="#" class="devided dropdown-item" @click.prevent="logout">
                                <i class="fas fa-sign-out-alt"></i> {{ $t('logout') }}
                            </a>
                        </div>
                    </li>
                    <!-- Guest -->
                    <template v-else>
                        <li class="nav-item">
                            <router-link :to="{ name: 'login' }" class="nav-link">
                                {{ $t('login') }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'new.register' }" class="nav-link">
                                {{ $t('register') }}
                            </router-link>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as routes from '@/constant/routes'

export default {
  name: 'Vheader',
  data: function () {
    return {
      routes: routes
    }
  },
  computed: mapGetters({
    user: 'auth/user'
  }),
  methods: {
    async logout () {
      let self = this
      // Log out the user.
      this.$ploading()
      await this.$store.dispatch('auth/logout').then(resolve => {
        self.$ploading(false)
      }, reject => {
        self.$ploading(false)
      })
      // Redirect to login.
      this.$router.push({ name: routes.LOGIN })
    }
  }
}
</script>

<style lang="sass" scoped>
    .devided
        border-top: 1px solid #ddd
    .navbar
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1)
        padding: 15px 20px
        background: #fff
        .container
            display: flex
            align-items: center
            .header-logo
                img
                    max-width: 150px
            .navbar-collapse
                display: flex
                flex: 1
                align-items: center
                justify-content: space-between
                .navbar-nav
                    display: flex
                    i
                        vertical-align: middle
                        margin-right: 10px
                    .nav-item
                        position: relative
                        .nav-link:hover
                            color: #000
                        &:hover .dropdown-menu
                            display: block
                        .nav-link
                            color: #767676
                            font-weight: bold
                            padding: 10px 18px
                            .profile-photo
                                max-width: 30px
                                vertical-align: middle
                                border-radius: 50%
                                margin-right: 7px
                        a
                            box-sizing: border-box
                            padding: 15px 18px
                            display: block
                            text-decoration: none
                            font-size: 15px
                        .dropdown-menu
                            display: none
                            position: absolute
                            background-color: #f9f9f9
                            min-width: 220px
                            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2)
                            z-index: 1
                            a:hover
                                background-color: #e0dada

</style>
