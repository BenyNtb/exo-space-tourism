import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../assets/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/destination',
    name: 'Destination',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (destination.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "destination" */ '../views/Destination.vue'),
    redirect: {
      name: 'DestinationDetails',
      params: {
        destinationDetails: 1
      },
    },
    children: [
      {
        path: ':destinationDetails',
        name: 'DestinationDetails',
        props: true,
        component: () => import(/* webpackChunkName: "destinationDetails" */ '../views/DestinationsDetails.vue'),
      }
    ],
    beforeEnter: (to, from, next) => {
  let exist = store.destinations.find(destination => destination.id === to.params.destinationDetails
  )
  if (exist) {
    next()
  } else {
    next({name: 'NotFound'})
  }
}
  },
  {
    path: '/crew',
    name: 'Crew',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (crew.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "crew" */ '../views/Crew.vue'),
    redirect: {
      name: 'CrewDetails',
      params: {
        crewDetails: 1
      },
    },
    children: [
      {
        path: ':crewDetails',
        name: 'CrewDetails',
        props: true,
        component: () => import(/* webpackChunkName: "crewnDetails" */ '../views/CrewDetails.vue'),
      }
    ],
    beforeEnter: (to, from, next) => {
  let exist = store.crew.find(crewtest => crewtest.id === to.params.crewDetails
  )
  if (exist) {
    next()
  } else {
    next({name: 'NotFound'})
  }
}
  },
  {
    path: '/technology',
    name: 'Technology',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (technology.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "technology" */ '../views/Technology.vue'),
    redirect: {
      name: 'TechnologyDetails',
      params: {
        technologyDetails: 1
      },
    },
    children: [
      {
        path: ':technologyDetails',
        name: 'TechnologyDetails',
        props: true,
        component: () => import(/* webpackChunkName: "technologyDetails" */ '../views/TechnologyDetails.vue'),
      }
    ],
    beforeEnter: (to, from, next) => {
  let exist = store.technology.find(technotest => technotest.id === to.params.technologyDetails
  )
  if (exist) {
    next()
  } else {
    next({name: 'NotFound'})
  }
}
  },
  {
    path: '/404',
    alias: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "404" */ '../views/NotFound.vue')
  }
]




const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
