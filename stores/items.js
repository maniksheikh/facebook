import { defineStore } from 'pinia'
import { ref, computed, readonly } from 'vue'
import itemsData from '~/data/store'

export const useItemsStore = defineStore('items', () => {
  const items = ref(null)

  // Getters
  const getItems = computed(() => items.value)

  // Actions
  const setItems = () => {
    items.value = itemsData
  }

  const initItems = () => {
    setItems()
  }

  return {
    items: readonly(items),
    getItems,
    setItems,
    initItems
  }
})
