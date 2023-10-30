<template>
  <button
    ref="_ref"
    :class="{
      [`arco-btn-${type}`]: type,
      [`arco-btn-size-${size}`]: size,
      [`arco-btn-status-${status}`]: status,
      'arco-btn-shape-round': round,
      'arco-btn-shape-circle': circle,
      'arco-btn-shape-disabled': disabled
    }"
    class="arco-btn"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types'
// import { buttonProps } from './types'
defineOptions({
  name: 'vButton'
})
withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
  size: 'medium',
  type: 'secondary'
})

const _ref = ref<HTMLButtonElement>()
defineExpose({
  ref: _ref
})
</script>
