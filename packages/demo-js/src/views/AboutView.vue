<template>
  <div class="about"></div>
</template>
<script setup>
const rootList = [
  { id: 1, parent: null, text: '菜单1' },
  { id: 11, parent: 1, text: '菜单1-1' },
  { id: 12, parent: 1, text: '菜单1-2' },
  { id: 3, parent: 12, text: '菜单3-2' },
  { id: 2, parent: null, text: '菜单2' },
  { id: 21, parent: 2, text: '菜单2-1' }
]
function getTree(rootList, id, list) {
  for (const item of rootList) {
    if (item.parent === id) {
      list.push(item)
    }
  }
  for (const i of list) {
    i.children = []
    getTree(rootList, i.id, i.children)
    if (i.children.length === 0) {
      delete i.children
    }
  }
  return list
}
const result = getTree(rootList, null, [])
console.log(result)
</script>
