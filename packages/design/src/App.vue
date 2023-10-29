<script setup lang="ts">
import type { ButtonInstance } from '@/components/Button/types'
import { onMounted, ref } from 'vue'
import Button from './components/Button/Button.vue'
const buttonRef = ref<ButtonInstance | null>(null)
onMounted(() => {
  if (buttonRef.value) {
    console.log(buttonRef.value.ref)
  }
})
</script>

<template>
  <div>
    <Button
      ref="buttonRef"
      type="primary"
      plain
      >Test Button</Button
    >
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
