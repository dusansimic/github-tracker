import Vue from 'vue'
import Router from 'vue-router'
import Issues from './views/Issues'
import Issue from './views/Issue'
import Pulls from './views/Pulls'
import Favourites from './views/Favourites'
import Profile from './views/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/issues',
      name: 'issues',
      component: Issues
    },
    {
      path: '/issue/:id',
      name: 'issue',
      component: Issue
    },
    {
      path: '/pulls',
      name: 'pulls',
      component: Pulls
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: Favourites
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
