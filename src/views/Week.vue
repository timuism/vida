<script setup lang="ts">
import { useTaskStore } from "@/stores/tasks";
import { storeToRefs } from "pinia";
import Layout from "../components/Layout.vue";
import AddTaskButton from "../components/AddTaskButton.vue";
import Task from "../components/Task.vue";
import { computed } from "vue";

const store = useTaskStore()
const {tasks} = storeToRefs(store)
const {addTasks} = store

const incompleteTasks = computed(() => {
  return tasks.value.filter(task => {
    return !task.completed
  })
})

const completedTasks = computed(() => {
  return tasks.value.filter(task => {
    return task.completed
  })
})
</script>

<template>
  <Layout>
    <template #header>
      <h1 class="text-6xl font-extralight text-gray">23</h1>
      <h2 class="hidden text-lg text-gray md:block">May 15 – May 22</h2>
    </template>

    <template #content>
      <div class="flex flex-col space-y-12">
        <section>
          <h3 class="mb-4 text-xs tracking-widest text-gray-100 uppercase">Incomplete Tasks</h3>
          <ul class="flex flex-col space-y-4">
            <li v-for="{uuid, text, completed} in incompleteTasks" :key="uuid">
              <Task :uuid="uuid" :text="text" :completed="completed"  />
            </li>

            <li>
              <AddTaskButton />
            </li>
          </ul>
        </section>

        <section>
          <h3 class="mb-4 text-xs tracking-widest text-gray-100 uppercase">Completed Tasks</h3>
          <ul class="flex flex-col space-y-4">
            <li v-for="{uuid, text, completed} in completedTasks" :key="uuid">
              <Task :uuid="uuid" :text="text" :completed="completed"  />
            </li>
          </ul>
        </section>
      </div>
    </template>
  </Layout>
</template>