<script setup lang="ts">
defineProps<{
  text: string
  completed: boolean
}>()

const emit = defineEmits(['onCheckboxClick'])
</script>

<template>
  <div class="inline-flex space-x-2 group">
    <button @click="emit('onCheckboxClick')">
      <icon
        :icon="['fas', 'check']" 
        :class="[completed ? 'text-accent-green border-accent-green-100 bg-accent-green-100' : 'text-gray border-gray']"
        class="inline-flex p-1 duration-100 border rounded-full cursor-pointer hover:animate-pulse hover:bg-accent-green-100 hover:scale-110" 
      />
    </button>

    <p class="cursor-text" :class="[completed ? 'line-through text-gray-100' : 'text-gray']">
      {{text}}
    </p>
  </div>
</template>