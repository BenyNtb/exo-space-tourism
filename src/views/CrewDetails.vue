<template>
<!-- <div>
    <section>
        <h1>Meet your crew</h1>
        <h2>{{crew.name}}</h2> -->
        <!-- <img :src=require"(`@/assets/${destination.image}')" alt=""> -->
        <!-- <section>
        <h4>{{crew.role}}</h4>
        <p>{{crew.bio}}</p>
        <img :src="require('@/assets/crew/'+crew.images.png)" alt="" id="gens">
        </section>
    </section>
</div> -->
<div class="crew container">
<div class="heading"><span>02</span> meet your crew</div>
<div class="content">
    <div class="text">
    <div class="holder">
        <div class="role h4">{{ crew.role }}</div>
        <div class="name h3">{{ crew.name }}</div>
        <p class="bio">{{ crew.bio }}</p>
    </div>
    <ul>
        <li @click="dynamicTabs" data-index="0" class="active"></li>
        <li @click="dynamicTabs" data-index="1"></li>
        <li @click="dynamicTabs" data-index="2"></li>
        <li @click="dynamicTabs" data-index="3"></li>
    </ul>
    </div>
    <div class="img-holder">
    <img :src="require('@/assets/crew/'+crew.images.png)" alt="" id="gens"> 
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
        crewDetails: {
            type: Number,
            required: true
        }
    },
    computed: {
        crew() {
            return store.crew.find(
                crewtest => crewtest.id == this.crewDetails
            )
        }
    },
    methods: {
    dynamicTabs(e) {
      this.i = e.target.getAttribute('data-index')
      document
        .querySelectorAll('ul li')
        .forEach((ele) => ele.classList.remove('active'))
      e.target.classList.add('active')
    },
  },
}

</script>

<style>
.heading {
    text-transform: uppercase;
    margin-bottom: 64px;
    font-size: 28px;
    letter-spacing: 4.72px;
    display: flex;
}

.heading span {
    font-weight: bold;
    color: rgba(255, 255, 255, 0.25);
    margin-right: 16px;
}
.crew {
    padding-top: 76px;
}
.crew .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.crew .content .text {
    display: flex;
    flex-direction: column;
    gap: 120px;
    flex: 1;
}
.crew .content .text .holder .role {
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    text-align: justify;
}
.crew .content .text .holder .name {
    text-transform: uppercase;
    margin-top: 15px;
    margin-bottom: 27px;
}
.crew .content .text ul {
    display: flex;
    gap: 24px;
}
.crew .content .text ul li {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: white;
    opacity: 0.17;
    transition: 0.2s;
}
.crew .content .text ul li.active {
    opacity: 1;
}
.crew .content .text ul li:hover {
    opacity: 0.5;
}
.crew .img-holder {
    flex: 1;
}
</style>