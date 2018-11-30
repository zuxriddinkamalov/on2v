<template>
    <el-container class="container">
        <el-aside class="side-bar" width="250px">
            <el-menu :default-openeds="['1']" :router="true">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-setting"></i>{{ $t('Dashboard') }}</template>
                    <el-menu-item-group>
                        <el-menu-item
                            :class="[{ 'side-bar-open': route.name === routes.DASHBOARD_INFO }]"
                            :route="{ name: routes.DASHBOARD_INFO, exact: true }"
                            index="1-1">{{ $t('Info') }}</el-menu-item>
                        <el-menu-item
                            :class="[{ 'side-bar-open': route.name === routes.DASHBOARD_CV }]"
                            :route="{ name: routes.DASHBOARD_CV, exact: true }"
                            index="1-1">{{ $t('CV') }}</el-menu-item>
                        <el-menu-item
                            :class="[{ 'side-bar-open': route.name === routes.DASHBOARD_PHONE_REGISTER }]"
                            :route="{ name: routes.DASHBOARD_PHONE_REGISTER, exact: true }"
                            index="1-1">{{ $t('Register phone number') }}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view />
        </el-main>
    </el-container>
</template>

<script>
import { mapState } from 'vuex'
import * as routes from '@/constant/routes'

export default {
  name: 'Index',
  data: function () {
    return {
      routes: routes
    }
  },
  computed: {
    ...mapState(['route'])
  }
}
</script>

<style lang="sass" scoped>
    .container
        padding: 20px 0
</style>
