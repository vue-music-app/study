<template>
  <div class="scroll" ref='scroll'>
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  mounted () {
    this.scroll = new BScroll(this.$refs.scroll, {
      probeType: 3,
      scrollX: true
    })
  }
}
</script>

<style>
</style>
