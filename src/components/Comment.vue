<template>
  <div class="comment">
    <md-card>
      <md-card-header>
        <md-avatar>
          <img :src="data.author.avatarUrl" :alt="data.author.login">
        </md-avatar>

        <div class="md-title">{{ data.author.login }}</div>
        <div class="md-subtitle">{{ this.$moment(data.publishedAt).fromNow() }}</div>
      </md-card-header>

      <md-card-content>
        <vue-markdown>{{ data.body }}</vue-markdown>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'comment',
  props: ['data'],
  components: {
    VueMarkdown
  }
}
</script>
