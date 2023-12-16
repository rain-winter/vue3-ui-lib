<script setup lang="ts">
import type { ButtonInstance } from '@/components/Button/types'
import { onMounted, ref } from 'vue'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
const buttonRef = ref<ButtonInstance | null>(null)
onMounted(() => {
  if (buttonRef.value) {
    // console.log(buttonRef.value.ref)
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
    color
  </div>
  <hr />
  <h2 class="text-lg">手风琴</h2>
  <Collapse>
    <CollapseItem name="a">
      <template #title>
        <h1>nice title</h1>
      </template>
      <h1>headline title</h1>
      <div>this is conent a a a</div>
    </CollapseItem>
    <CollapseItem
      name="b"
      title="nice titl b itenb b"
    >
      <div>this is bb test</div>
    </CollapseItem>
  </Collapse>
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
