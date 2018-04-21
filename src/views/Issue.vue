<template>
  <div class="issueView" v-if="issueData">
    <h2>{{ issueData.title }}</h2>
    <div v-for="object in issueData.timeline.nodes" v-bind:key="object">
      <Comment v-if="object.__typename === 'IssueComment'" :data="object"/>
    </div>
  </div>
</template>

<script>
import Comment from '@/components/Comment'

export default {
  name: 'issueView',
  components: {
    Comment
  },
  data () {
    return {
      issueData: null
    }
  },
  methods: {
    getIssue () {
      this.$getItem('latestIssues').then(data => {
        this.issueData = data.filter(issue => issue.id === this.$route.params.id)[0]
      })
    }
  },
  mounted () {
    this.getIssue()
  }
}
</script>

<style>
#commentCard {
  margin-bottom: 10px;
}
</style>
