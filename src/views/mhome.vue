<template>
  <div>
    <search></search>
    <router-view></router-view>
  </div>
</template>
<script>
import search from './../components/search'
export default {
  components: {
    search
  }
}
</script>
