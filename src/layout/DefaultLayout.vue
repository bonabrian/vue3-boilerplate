<template>
  <div class="main-layout">
    <router-view v-slot="{ Component }">
      <transition
        name="fade"
        mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
};
</script>
