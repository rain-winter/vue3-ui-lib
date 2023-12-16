<template>
  <div
    class="vk-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <div
      class="vk-collapse-item__header"
      :id="`item-header-${name}`"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
    </div>
    <div
      class="vk-collapse-item__content"
      v-show="isActive"
    >
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, inject } from 'vue'
import { collapseContextKey, type CollapseItemProps } from './types'

defineOptions({
  name: 'VkCollapseItem'
})
const props = defineProps<CollapseItemProps>()

const collapseContext = inject(collapseContextKey)
const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name))

const handleClick = () => {
  if (props.disabled) return
  collapseContext?.handleItemClick(props.name)
}
</script>
<style>
.vk-collapse-item__header {
  font-size: 30px;
}
</style>
