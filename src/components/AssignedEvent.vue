<template>
  <div class="assignedEvent">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ data.user.login }} was assinged by {{ data.actor.login }}.</div>
        </md-card-header-text>

        <md-card-media>
          <img :src="data.user.authorUrl" :alt="data.user.login"/>
        </md-card-media>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'assignedEvent',
  props: ['data']
}
</script>
