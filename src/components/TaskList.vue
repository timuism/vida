<script setup lang="ts">
import Task from "../components/Task.vue";
import { useTaskStore } from "@/stores/task";
import { storeToRefs } from "pinia";
import { onMounted, reactive, watchEffect } from "vue";
import { ApiServiceProvider } from "@/services/provider";
import type { Task as TaskModel } from "@/models/task";

const { getTasks, toggleTaskCompleted } = useTaskStore()
const { tasks } = storeToRefs(useTaskStore())
getTasks()

function handleCheckboxClick(data: Event){
  const response = toggleTaskCompleted(data)
}


</script>

<template>
  <ul class="space-y-4">
    <li v-for="{id, taskName, completed} in tasks" :key="id">
      <Task :id="id" :text="taskName" :completed="completed" @on-checkbox-click="handleCheckboxClick" />
    </li>
  </ul>
</template>