<template>
  <div>
    <div class="heading"><span>01</span> pick your destination</div>
    <div id="nav">
      <router-link  :to="{name:'DestinationDetails', params:{destinationDetails : zone.id}}"
            v-for="zone in test" :key="zone.id">
            {{zone.name}} </router-link>
    </div>
      <router-view :key='$route.path'/>
    

  </div>
</template>

<script>
import store from '../assets/store'
export default {
  data() {
    return {
      test : store.destinations
    }
  },
  // computed: {
  //   destination(){
  //     return store.destinations.find(
  //       planete => planete.name == this.destId
  //     )
  //   }
  // }
}
</script>

<style>
.heading {
  text-transform: uppercase;
  margin-bottom: 64px;
  font-size: 28px;
  letter-spacing: 4.72px;
}

.heading span {
  font-weight: bold;
  color: rgba(255, 255, 255, 0.25);
  margin-right: 16px;
}

</style>
