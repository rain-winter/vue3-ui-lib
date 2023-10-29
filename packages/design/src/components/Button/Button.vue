<template>
  <button
    ref="_ref"
    :class="{
      [`button--${type}`]: type,
      [`button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled
    }"
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
  nativeType: 'button'
})

const _ref = ref<HTMLButtonElement>()
defineExpose({
  ref: _ref
})
</script>
