<template>
  <div>
    <md-empty-state
      class="md-primary"
      md-icon="done"
      md-label="Token is set"
      md-description="You are ready to use the app.">
      <md-button class="md-primary md-raised" @click="this.$localStorage.remove('token');this.$store.dipsatch('setToken')">Delete token</md-button>
    </md-empty-state>
  </div>
</template>
