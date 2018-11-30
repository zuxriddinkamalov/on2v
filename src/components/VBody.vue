<template>
    <div :class="[defaultClass]">
        <slot></slot>
    </div>
</template>

<script>
export default {
  props: {
    defaultClass: {
      type: String
    }
  },
  name: 'VBody'
}
</script>

<style scoped>

</style>
