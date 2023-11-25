<script setup lang="ts">
import type { ButtonInstance } from '@/components/Button/types';
import { onMounted, ref } from 'vue';
import Button from './components/Button/Button.vue';
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
      status="success"
      >点击</Button
    >
  </div>
  <div
    class="rounded-full"
    style="color: var(--color-danger-light-4); font-size: 18px"
  >
    123
  </div>
  <div
    class="rounded-full"
    style="width: 40px; height: 40px; background-color: aqua"
  ></div>
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
