<template>
  <div>
    <md-empty-state
      class="md-accent"
      md-icon="fingerprint"
      md-label="Token not set"
      md-description="Please set token in profile page.">
      <md-button class="md-primary md-raised" to="/profile">Set token</md-button>
    </md-empty-state>
  </div>
</template>
