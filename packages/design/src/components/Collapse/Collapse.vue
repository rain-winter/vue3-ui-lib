<template>
  <div class="vk-collapse">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { provide, ref } from 'vue'
import { collapseContextKey, type NameType } from './types'

defineOptions({
  name: 'ACollapse'
})

const activeNames = ref<NameType[]>([])

const handleItemClick = (item: NameType) => {
  const index = activeNames.value.indexOf(item)
  if (index > -1) {
    // 存在 删除数字对应的一项
    activeNames.value.splice(index, 1)
  } else {
    // 不存在
    activeNames.value.push(item)
  }
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>
