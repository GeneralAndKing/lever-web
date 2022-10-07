<template lang="pug">
#auth.flex.items-center.flex-col
  .row.no-wrap.flex.items-center.full-width.text-white.px-8.py-4
    #auth-logo.font-bold Lever
    q-space
    #auth-tip Doesn't have an account?
  #auth-container.justify-center.items-center.flex-grow.flex
    q-card.full-width.shadow-18.animated.fadeIn.transition-all.q-mb-xl(class="<sm:(h-screen w-full max-w-none mb-0)")
      q-card-section.q-pa-none
        router-view(v-slot="{ Component }")
          transition(enter-active-class="animated fadeIn", leave-active-class="animated fadeOut", appear, mode="out-in" )
            component(:is="Component")
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
#auth {
  height: 100vh;
  width: 100%;
  background: url("src/assets/bg.jpg") no-repeat center center;
  background-size: cover;
  #auth-title {
    box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
  }
  #auth-container {
    width: 996px;
  }
}
</style>
