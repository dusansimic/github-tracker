<template>
  <div class="about">
    <HasToken v-if="this.$localStorage.get('token')"/>
    <form novalidate @submit.prevent v-else>
      <md-card>
        <md-card-header>
          <div class="md-title">Set token</div>
        </md-card-header>

        <md-card-content>
          <md-field>
            <label>Token</label>
            <md-input v-model="gitHubToken" type="password"></md-input>
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button @click="deleteToken()">Delete</md-button>
          <md-button type="submit" @click="storeToken()" class="md-primary">Set</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
import HasToken from '@/components/HasToken'

export default {
  name: 'profile',
  components: {
    HasToken
  },
  data () {
    return {
      gitHubToken: null,
      gotToken: this.$localStorage.get('token')
    }
  },
  methods: {
    storeToken () {
      this.$localStorage.set('token', this.gitHubToken)
      this.gotToken = this.$localStorage.get('token')
    },
    deleteToken () {
      this.$localStorage.remove('token')
    }
  }
}
</script>
