<template>
    <VBody default-class="home-slider">
        <el-row type="flex" :gutter="30" align="middle">
            <el-col :xs="24" :sm="12">
                <carousel class="carousel" :autoplay="true"
                      :loop="true"
                      :paginationPadding="4"
                      :speed="2000"
                      :autoplayHoverPause="false"
                      :autoplayTimeout="5000"
                      :per-page="1">
                    <slide>
                        <img class="image-style" src="images/send-video.jpg"/>
                    </slide>
                    <slide>
                        <img class="image-style" src="images/speaker.jpg"/>
                    </slide>
                    <slide>
                        <img class="image-style" src="images/board.jpg"/>
                    </slide>
                    <slide>
                        <img class="image-style" src="images/investigator.jpg"/>
                    </slide>
                    <slide>
                        <img class="image-style" src="images/patent.jpg"/>
                    </slide>
                </carousel>
            </el-col>
            <el-col type="flex" :xs="24" :sm="12" class="home-services">
                <el-row :gutter="15">
                    <el-col :xs="24" :sm="8" class="service">
                        <router-link :to="{
                            name: routes.SMS_SEND
                        }"><img class="menu-style" src="images/menus/video-sms-send.jpg" /></router-link>
                    </el-col>
                    <el-col :xs="24" :sm="8" class="service">
                        <router-link :to="{
                            name: routes.VIDEOS
                        }"><img class="menu-style" src="images/menus/video-mng.jpg" /></router-link>
                    </el-col>
                    <el-col :xs="24" :sm="8" class="service">
                        <router-link :to="{
                            name: routes.SMS_SEND
                        }"><img class="menu-style" src="images/menus/vote-sms-send.jpg" /></router-link>
                    </el-col>
                    <el-col :xs="24" :sm="8" class="service">
                        <router-link :to="{
                            name: routes.CLIENTS
                        }"><img class="menu-style" src="images/menus/client-mng.jpg" /></router-link>
                    </el-col>
                    <el-col :xs="24" :sm="8" class="service">
                        <router-link :to="{
                            name: routes.SMS_SEND
                        }"><img class="menu-style" src="images/menus/simple-sms-send.jpg" /></router-link>
                    </el-col>
                    <el-col :xs="24" :sm="8" class="service">
                        <router-link :to="{
                            name: routes.CHARGE
                        }"><img class="menu-style" src="images/menus/charge.jpg" /></router-link>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </VBody>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import VBody from '@/components/VBody'
import * as ROUTES from '@/constant/routes'

export default {
  name: 'Home',
  data: function () {
    return {
      routes: ROUTES
    }
  },
  components: {
    VBody,
    Carousel,
    Slide
  }
}
</script>

<style lang="sass" scoped>
    .home-slider
        overflow: hidden
        padding: 80px 15px
        background: #9BBBD4
        flex: 1
        .home-services
            .service
                margin-bottom: 15px
            img
                -webkit-transition: all 300ms linear
                -moz-transition: all 300ms linear
                -ms-transition: all 300ms linear
                -o-transition: all 300ms linear
                transition: all 300ms linear
                max-width: 100%
                &:hover
                    -webkit-box-shadow: 0 0 20px 2px #7D7D7D
                    box-shadow: 0 0 20px 2px #7D7D7D
</style>
