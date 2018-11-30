<template>
    <div class="footer">
        <div class="container">
            <div class="footer-menu">
                <ul>
                    <li><router-link to="/agreement">{{ $t('terms_of_service') }}</router-link></li>
                    <li><router-link to="/privacy">{{ $t('privacy_policy') }}</router-link></li>
                    <li><router-link to="/dashboard/cs">{{ $t('contact_us') }}</router-link></li>
                    <li><router-link to="/faq">{{ $t('user_guide') }}</router-link></li>
                </ul>
            </div>
            <div class="copy">
                <p>{{ $t('footer_text') }}: 525-51-00307</p>
                <p>{{ $t('copy') }} &copy; ON2V. {{ $t('copy_text') }}.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'VFooter'
}
</script>

<style lang="sass" scoped>
    .footer
        text-align: center
        line-height: 1.4
        padding: 20px 0
        background: #323A45
        color: #999
        font-size: 14px
        font-weight: 400
        .footer-menu
            margin-bottom: 5px
            ul li
                display: inline-block
                border-right: 1px solid
                &:last-child
                    border-right: none
                a
                    color: #fff
                    padding: 0 10px

</style>
