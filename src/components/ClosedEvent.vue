<template>
  <div class="closedEvent">
    <md-card>
      <md-card-header>
        <md-avatar class="md-small">
          <img :src="data.actor.avatarUrl" :alt="data.actor.login">
        </md-avatar>

        <div class="md-title">{{ data.actor.login }} closed this issue {{ this.$moment(data.createdAt).fromNow() }}.</div>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'closedEvent',
  props: ['data']
}
</script>
