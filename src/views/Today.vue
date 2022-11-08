<script setup lang="ts">
import Task from "../components/Task.vue";
import EventCompact from "../components/EventCompact.vue";
import Layout from "../components/Layout.vue";
import AddTaskButton from "../components/AddTaskButton.vue";
import { computed, onMounted, watchEffect } from "vue";
import TaskList from "../components/TaskList.vue";
import moment from 'moment';
import { ApiServiceProvider } from "@/services/provider";
import { useTaskStore } from '@/stores/task'
import { storeToRefs } from "pinia";
import type { Task as TaskModel } from "@/models/task";

const displayedDate = moment().format("MMM D");
const { tasks } = storeToRefs(useTaskStore())
const { getTasks } = useTaskStore()
getTasks()

console.log(tasks)

const todaysTasks = computed(() => {
  return tasks.value.filter((t: TaskModel) => {
    const today = moment().format('YYYY-MM-DD')
    return (t.dueDate === today || t.startDate === today)
  })
})
</script>
<template>
    <Layout>
      <template #header>
        <h1 class="text-6xl font-extralight text-gray">Today</h1>
        <h2 class="hidden text-lg text-gray md:block">{{ displayedDate }}</h2>
      </template>

      <template #content>
          <TaskList :tasks="tasks" />

        <div class="mt-4">
          <AddTaskButton />
        </div>

        <div class="flex items-center justify-start py-12 mt-auto space-x-4">
          <button class="px-8 py-5 duration-200 border-2 rounded-lg bg-primary-100 text-primary hover:bg-primary border-primary-100 hover:text-white ring-2 ring-transparent hover:ring-primary-100">
              Prepare for tomorrow
          </button>

          <router-link to="/week">
            <button class="px-8 py-5 duration-200 border-2 rounded-lg border-gray text-gray ring-2 ring-transparent hover:ring-gray-100">
                View this week
            </button>
          </router-link>
        </div>
      </template>
    </Layout>
</template>