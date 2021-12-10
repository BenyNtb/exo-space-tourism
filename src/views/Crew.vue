<template>
    <div>
      <div id="nav">
        <router-link  :to="{name:'CrewDetails', params:{crewDetails : team.id}}"
            v-for="team in teamId" :key="team.id">
            {{team.name}} </router-link>
      </div>
    <router-view :key='$route.path'/>
    </div>
</template>


<script>
import store from '../assets/store'
export default {
  data() {
    return {
      teamId: store.crew
    }
  },
  // computed: {
  //   crew(){
  //     return store.crew.find(
  //       gens => gens.id == this.teamId
  //     )
  //   }
  // }
}
</script>