<template>
  <div class="pulls">
    <NoToken v-if="!this.$localStorage.get('token')"/>
    <div v-else>
      <md-list class="md-tripple-line">
        <div v-for="pull in latestPulls" v-bind:key="pull.title">
          <Pull :pull="pull"/>
        </div>
      </md-list>
    </div>
  </div>
</template>

<script>
import NoToken from '@/components/NoToken'
import Pull from '@/components/Pull'

export default {
  name: 'pulls',
  components: {
    NoToken,
    Pull
  },
  data () {
    return {
      latestPulls: []
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
      this.$getItem('latestPulls').then(data => {
        if (data !== undefined || data !== null) {
          this.latestPulls = data
        }
      })

      const pullsQuery = {query: `query {
        viewer {
          pullRequests(orderBy: {direction: DESC, field: UPDATED_AT}, first: 10, states: OPEN) {
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
          'Content-Length': JSON.stringify(pullsQuery).length,
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(pullsQuery)
      }).then(res => res.json()).then(data => {
        this.latestPulls = data.data.viewer.pullRequests.nodes
        this.$getItem('latestPulls').then(data => {
          if (!this.deepEqual(data, this.latestPulls)) {
            this.$setItem('latestPulls', this.latestPulls)
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
