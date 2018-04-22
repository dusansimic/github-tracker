<template>
  <div class="issueView" v-if="issueData">
    <div class="md-title"><b>{{ issueData.title }} #{{ issueData.number }}</b></div>
    <div class="md-subtitle">{{ this.$moment(issueData.publishedAt).fromNow() }}</div>
    <p class="issueBody">
      <vue-markdown>{{ issueData.body }}</vue-markdown>
    </p>
    <div v-for="object in issueData.timeline.nodes" v-bind:key="object.id">
      <br/>
      <AssignedEvent v-if="object.__typename === 'AssignedEvent'" :data="object"/>
      <ClosedEvent v-if="object.__typename === 'ClosedEvent'" :data="object"/>
      <Comment v-if="object.__typename === 'IssueComment'" :data="object"/>
    </div>
  </div>
</template>

<script>
import AssignedEvent from '@/components/AssignedEvent'
import ClosedEvent from '@/components/ClosedEvent'
import Comment from '@/components/Comment'
import VueMarkdown from 'vue-markdown'

export default {
  name: 'issueView',
  components: {
    AssignedEvent,
    ClosedEvent,
    Comment,
    VueMarkdown
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
.issueBody {
  word-wrap: break-word;
}
</style>
