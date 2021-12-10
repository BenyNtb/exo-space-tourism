<template>
    <div>
        <div id="nav">
        <router-link  :to="{name:'TechnologyDetails', params:{technologyDetails : tech.id}}"
            v-for="tech in techId" :key="tech.id">
            {{tech.name}} </router-link>
      </div>
    <router-view :key='$route.path'/>
    </div>
</template>
<script>
import store from '../assets/store'
export default {
  data() {
    return {
      techId: store.technology
    }
  },
  // computed: {
  //   technology(){
  //     return store.technology.find(
  //       vehicule => vehicule.id == this.techId
  //     )
  //   }
  // }
}
</script>
