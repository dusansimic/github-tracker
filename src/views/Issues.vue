<template>
  <div class="latest">
    <NoToken v-if="!this.$localStorage.get('token')"/>
    <div v-else>
      <md-list class="md-tripple-line">
        <div v-for="issue in latestIssues" v-bind:key="issue.title">
          <md-list-item>
            <md-avatar>
              <img :src="issue.author.avatarUrl" :alt="issue.author.login"/>
            </md-avatar>

            <div class="md-list-item-text">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="customIconClosed" v-if="issue.state === 'CLOSED'"><path fill-rule="evenodd" d="M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5-1-1L12 7l-1.5-1.5zM8 13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7 1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" class="customIconOpen" v-else><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg><span>{{ ` ${issue.title}` }}</span></span>
              <span>{{ issue.repository.owner.login }}/{{ issue.repository.name }}</span>
            </div>
          </md-list-item>

          <md-divider class="md-inset"/>
        </div>
      </md-list>
    </div>
  </div>
</template>

<script>
import NoToken from '@/components/NoToken'
export default {
  name: 'latest',
  components: {
    NoToken
  },
  data () {
    return {
      latestIssues: []
    }
  },
  methods: {
    getLatest () {
      const issuesQuery = {query: `query {
        viewer {
          issues(orderBy: {direction: DESC, field: CREATED_AT}, first: 5) {
            nodes {
              author {
                avatarUrl,
                login
              },
              state,
              repository {
                name,
                owner {
                  login
                }
              },
              title
            }
          }
        }
      }`}

      fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: new Headers({
          Authorization: `bearer ${this.$localStorage.get('token')}`,
          'Content-Length': JSON.stringify(issuesQuery).length,
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(issuesQuery)
      }).then(res => res.json()).then(data => {
        this.latestIssues = data.data.viewer.issues.nodes
      }).catch(err => {
        console.error(err)
      })
    }
  },
  mounted () {
    if (this.$localStorage.get('token')) {
      this.getLatest()
    }
  }
}
</script>

<style>
.customIconClosed {
  color: #cb2431;
  fill: currentColor;
}
.customIconOpen {
  color: #28a745;
  fill: currentColor;
}
.md-list-item-text svg {
  width: auto;
}
</style>
