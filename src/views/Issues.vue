<template>
  <div class="latest">
    <NoToken v-if="!this.$localStorage.get('token')"/>
    <div v-else>
      <md-list class="md-tripple-line">
        <div v-for="issue in latestIssues" v-bind:key="issue.title">
          <Issue :issue="issue"/>
        </div>
      </md-list>
    </div>
  </div>
</template>

<script>
import NoToken from '@/components/NoToken'
import Issue from '@/components/Issue'
const MAX_NUMBER = 2 ^ 31 - 1

export default {
  name: 'latest',
  components: {
    NoToken,
    Issue
  },
  data () {
    return {
      latestIssues: []
    }
  },
  methods: {
    deepEqual (x, y) {
      if (x === y) {
        return true
      } else if ((typeof x === 'object' && x !== null) && (typeof y === 'object' && y !== null)) {
        if (Object.keys(x).length !== Object.keys(y).length) {
          return false
        }

        for (var prop in x) {
          if (y.hasOwnProperty(prop)) {
            if (!this.deepEqual(x[prop], y[prop])) {
              return false
            }
          } else {
            return false
          }
        }

        return true
      } else {
        return false
      }
    },
    getLatest () {
      this.$getItem('latestIssues').then(data => {
        if (data !== undefined || data !== null) {
          this.latestIssues = data
        }
      })

      const issuesQuery = {query: `query {
        viewer {
          issues(orderBy: {direction: DESC, field: CREATED_AT}, first: 10) {
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
              labels(first: ${MAX_NUMBER}) {
                nodes {
                  color,
                  name
                }
              },
              timeline(first: ${MAX_NUMBER}) {
                nodes {
                  __typename
                  ... on AssignedEvent {
                    actor {
                      avatarUrl,
                      login
                    },
                    createdAt,
                    user {
                      avatarUrl,
                      login
                    }
                  }
                  ... on ClosedEvent {
                    actor {
                      avatarUrl,
                      login
                    },
                    createdAt
                  }
                  ... on Commit {
                    author {
                      user {
                        avatarUrl,
                        login
                      }
                    },
                    additions,
                    deletions,
                    committedDate
                  },
                  ... on CrossReferencedEvent {
                    actor {
                      avatarUrl,
                      login
                    },
                    source {
                      __typename
                      ... on Issue {
                        title
                      }
                      ... on PullRequest {
                        title
                      }
                    }
                  }
                  ... on IssueComment {
                    author {
                      avatarUrl,
                      login
                    },
                    body,
                    publishedAt,
                    reactions(first: ${MAX_NUMBER}) {
                      nodes {
                        content,
                        user {
                          login
                        }
                      }
                    }
                  }
                }
              },
              title,
              id
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
        this.$getItem('latestIssues').then(data => {
          if (!this.deepEqual(data, this.latestIssues)) {
            this.$setItem('latestIssues', this.latestIssues)
          }
        })
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
