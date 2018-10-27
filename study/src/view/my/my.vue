<template>
  <div>
    <router-link to='balance'>去余额</router-link>
    <router-link to='indent'>去订单</router-link>
    <button @click='d'>余额</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'my',
  methods: {
    d () {
      this.$router.push('balance')
    }
  }

}
</script>

<style>

</style>
