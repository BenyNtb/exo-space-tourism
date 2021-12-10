<template>
  <div class="home container">
    <div class="text">
      <div class="h5">so, you want to travel to</div>
      <h1 class="h1">space</h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    <span class="explore h4">explore</span>
  </div>
</template>

<script>



  export default {
    name: 'Home',
    components: {

    }
  }
</script>
<style>
  .home {
    display: flex;
    align-items: flex-end;
    padding-bottom: 131px;
    justify-content: center;
  }


  .home .text {
    max-width: 450px;
  }


  .home .text .h5 {
    text-transform: uppercase;
    color: #d0d6f9;
  }





  .home .text .h1 {
    margin: 24px 0;
    font-weight: normal;
    text-transform: uppercase;
  }



  .home .explore {
    width: 274px;
    height: 274px;
    background-color: white;
    color: #0b0d17;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    text-decoration: none;
  }

  .home .explore::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 450px;
    height: 450px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.136);
    opacity: 0;
    transition: 0.3s;
    transform: translate(-100%, -100%);
    pointer-events: none;
  }

  .home .explore:hover::after {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
</style>