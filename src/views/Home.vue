<template>
  <div class="home">
    <banner></banner>
    <router-view></router-view>
    <mfooter></mfooter>
  </div>
</template>

<script>
// @ is an alias to /src
import banner from './../components/banner'
import mfooter from './../components/footer'
export default {
  name: 'home',
  components: {
    banner,
    mfooter
  }
}
</script>
