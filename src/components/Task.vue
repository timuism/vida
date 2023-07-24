<script setup lang="ts">
import { watchEffect } from 'vue';
import { useTaskStore } from '@/stores/task';

defineProps<{
  id: number
  text: string
  completed: boolean
}>()

const emit = defineEmits(['onCheckboxClick'])
</script>

<template>
  <div class="inline-flex space-x-2 group">
    <label @click="emit('onCheckboxClick', {id: id, completed: completed})">
      <icon
        :icon="['fas', 'check']"
        :class="[completed ? 'text-accent-green border-accent-green-100 bg-accent-green-100' : 'text-gray border-gray']"
        class="inline-flex p-1 duration-100 border rounded-full cursor-pointer hover:animate-pulse hover:bg-accent-green-100 hover:scale-110" 
      />
      <input :name="`task-${id}`" type="checkbox" v-model="completed" hidden />
    </label>

    <p class="cursor-text" :class="[completed ? 'line-through text-gray-100' : 'text-gray']">
      {{text}}
    </p>

    <router-link :to="`task/${id}`">
      <span>i</span>
    </router-link>
  </div>
</template>