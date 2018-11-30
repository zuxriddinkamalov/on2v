<template>
    <el-container class="container">
        <el-aside class="side-bar" width="250px">
            <el-menu :default-openeds="['1']" :router="true">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-setting"></i>{{ $t('settings') }}</template>
                    <el-menu-item-group>
                        <el-menu-item
                            :class="[{ 'side-bar-open': route.name === routes.PROFILE }]"
                            :route="{ name: routes.PROFILE, exact: true }"
                            index="1-1">{{ $t('profile') }}</el-menu-item>
                        <el-menu-item
                            :class="[{ 'side-bar-open': route.name === routes.PASSWORD }]"
                            :route="{ name: routes.PASSWORD, exact: true }"
                            index="1-1">{{ $t('password') }}</el-menu-item>
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
