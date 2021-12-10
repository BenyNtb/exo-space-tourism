<template>
    <!-- <div>
    <section>
        <h1>Space Launch 101</h1>
        <h4>{{technology.name}}</h4>
        <p>{{technology.description}}</p>
    <img :src="require('@/assets/technology/'+technology.images.portrait)" alt="" id="tech"> 
            
        </section>
</div> -->
    <div class="technology">

        <div class="heading"><span>03</span> space launch 101</div>
        <div class="content">
            <div class="text-container">
                <ul>
                    <li class="active h4" @click="dynamicTabs" data-index="0">1</li>
                    <li class="h4" @click="dynamicTabs" data-index="1">2</li>
                    <li class="h4" @click="dynamicTabs" data-index="2">3</li>
                </ul>
                <div class="text">
                    <div class="term">the terminology…</div>
                    <div class="h3">{{ technology.name }}</div>
                    <p>{{ technology.description }}</p>
                </div>
            </div>
            <div class="img-holder">
                <img :src="require('@/assets/technology/'+technology.images.portrait)" alt="" id="tech">
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
            technologyDetails: {
                type: Number,
                required: true
            }
        },
        computed: {
            technology() {
                return store.technology.find(
                    technotest => technotest.id == this.technologyDetails
                )
            }
        },
        methods: {
            dynamicTabs(e) {
            this.destination = e.target.getAttribute('data-index')
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
}

.heading span {
    font-weight: bold;
    color: rgba(255, 255, 255, 0.25);
    margin-right: 16px;
}
.technology {
	padding-left: 166.5px;
	padding-bottom: 101px;
	padding-top: 40px;
    /* background-image: url('../assets/technology/background-technology-desktop.jpg'); */
}
.technology .content {
    display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 32px;
}
.technology .content .text-container {
	display: flex;
	justify-content: space-between;
	gap: 80px;
}
.technology .content .text-container ul {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 32px;
}
.technology .content .text-container ul li {
	width: 80px;
	height: 80px;
	cursor: pointer;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid rgba(255, 255, 255, 0.25);
	transition: 0.2s;
}
.technology .content .text-container ul li.active {
	background-color: white;
	border: 1px solid white;
	color: #0b0d17;
}
.technology .content .text-container ul li:hover {
	border: 1px solid white;
}
.technology .content .text-container .text {
	max-width: 470px;
}
.technology .content .text-container .text .term {
	font-size: 16px;
	color: #d0d6f9;
	text-transform: uppercase;
	letter-spacing: 2.7px;
}
.technology .content .text-container .text .h3 {
	margin-top: 11px;
	margin-bottom: 17px;
	text-transform: uppercase;
}
.technology .content .img-holder img {
	max-width: 100%;
}
.technology .content .img-holder .landscape {
	min-height: 170px;
}
</style>