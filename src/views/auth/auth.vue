<template>
  <div class="auth">
    <div class="container container_small">
      <div class="auth-wrapper">
        <div class="auth-greet">
          <div class="auth-logo">
            <icon name="logo" />
          </div>
          <div class="auth-promo">
            More than just one repository. This is our digital world.
          </div>
          <button @click="checkUser" class="auth-button">
            <main-button theme="green">
              <span class="btn-text">Authorize with github</span>
              <span><icon name="github" /></span>
            </main-button>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { icon } from '../../components/icons'
import { mainButton } from '../../components/main-button'
import { mapActions } from 'vuex'

export default {
  components: {
    icon,
    mainButton
  },
  methods: {
    ...mapActions({
      checkUser: 'auth/checkUser',
      exchangeForToken: 'auth/exchangeForToken',
      getUser: 'auth/getUser'
    })
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')

    if (code !== null) {
      const token = await this.exchangeForToken(code)
      localStorage.setItem('token', token)
    } else {
      return
    }
    const user = await this.getUser()

    if (user) {
      this.$router.replace({ name: 'root' })
    }
  }
}
</script>

<style src="./auth.scss" lang="scss" scoped></style>
