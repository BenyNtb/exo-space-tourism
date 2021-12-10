<template>
<!-- <div>
    <section>
        <h2>{{destination.name}}</h2>
        <section>
            <img :src="require('@/assets/destination/'+destination.images.png)" alt="" id="dest"> 
            <p>{{destination.description}}</p>
            <p>{{destination.distance}}</p>
            <p>{{destination.travel}}</p>
            
        </section>
    </section>
</div> -->
<div class="destination container">
    <div class="content">
      <img :src="require('@/assets/destination/'+destination.images.png)" alt="" id="dest"> 
      <div class="text">
        <ul class="navigation">
          <li>
            {{destination.name }}
          </li>
        </ul>
        <!-- <div class="h2">{{ destination.name }}</div> -->
        <p class="description">{{ destination.description }}</p>
        <div class="avgs">
          <div class="distance sub1">
            <span class="sub2">avg. distance</span
            >{{ destination.distance }}
          </div>
          <div class="time sub1">
            <span class="sub2">est. travel time</span
            >{{ destination.travel }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../assets/store"
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        destinationDetails: {
            type: Number,
            required: true
        }
    },
    computed: {
        destination() {
            return store.destinations.find(
                destination => destination.id == this.destinationDetails
            )
        }
    }
}
</script>

<style>
.destination {
    padding-top: 76px;
    padding-bottom: 62px;
}
.destination .content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 53px;
}
.destination .content .text {
    max-width: 445px;
}
.destination .content .text .navigation {
    display: flex;
    gap: 35px;
    margin-bottom: 37px;
}
.destination .content .text .navigation li {
    position: relative;
    cursor: pointer;
    text-transform: uppercase;
    color: #d0d6f9;
}
.destination .content .text .navigation li::after {
    content: '';
    opacity: 0;
    transform: translateX(-100%);
    transition: 0.2s;
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 100%;
    height: 3px;
}
.destination .content .text .navigation li:hover::after {
    background-color: white;
    opacity: 0.5;
    transform: translateX(0);
}
.destination .content .text .navigation li.active {
    color: white;
}
.destination .content .text .navigation li.active::after {
    background-color: white;
    opacity: 1;
    transform: translateX(0);
}
.destination .content .text .h2 {
    text-transform: uppercase;
    margin-bottom: 24px;
}
.destination .content .text .description {
    line-clamp: 3;
}
.destination .content .text .avgs {
    border-top: 1px solid #383b4b;
    margin-top: 54px;
    padding-top: 28px;
    text-transform: uppercase;
    display: flex;
    gap: 79px;
}
.destination .content .text .avgs .time, .destination .content .text .avgs .distance {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.destination .content .text .avgs .time span, .destination .content .text .avgs .distance span {
    color: #d0d6f9;
}

</style>