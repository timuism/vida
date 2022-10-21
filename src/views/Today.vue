<script setup lang="ts">
import Task from "../components/Task.vue";
import EventCompact from "../components/EventCompact.vue";
import Layout from "../components/Layout.vue";

import { useTaskStore } from "@/stores/tasks";
import AddTaskButton from "../components/AddTaskButton.vue";

const { tasks } = useTaskStore()

</script>
<template>
    <Layout>
      <template #header>
        <h1 class="text-6xl font-extralight text-gray">Today</h1>
        <h2 class="hidden text-lg text-gray md:block">May 19</h2>
      </template>

      <template #content>
        <ul class="flex space-x-4">
          <li v-for="event in events" :key="event.uuid">
            <EventCompact :event="event" />
          </li>
        </ul>

        <ul class="space-y-4">
          <li v-for="{uuid, text, completed} in tasks" :key="uuid">
            <Task :uuid="uuid" :text="text" :completed="completed" />
          </li>

          <li>
            <AddTaskButton />
          </li>
        </ul>

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