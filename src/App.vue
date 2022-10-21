<script setup lang="ts">
import { computed, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useTaskStore } from './stores/tasks';
import { useEventStore } from './stores/events';
import Login from './views/Login.vue';

const {tasks} = useTaskStore()
// const {events} = useEventStore()

const weekNumber = ref(23)

const completedTasks = computed(() => {
  return tasks.filter(task => {
    return task.completed
  })
})
</script>

<template>
    <div class="flex flex-col font-dmsans md:flex-row text-gray">
      <nav class="w-full md:w-[190px] md:h-screen bg-black text-white flex flex-col justify-start items-center">
        <section class="w-full py-8 border-b-2 border-white">
          <router-link to="/">
            <figure class="bg-white rounded-full w-[80px] h-[80px] mx-auto overflow-hidden">
                <img src="/young-roshi.jpg" alt="" class="object-cover w-full h-full" />
            </figure>
          </router-link>
        </section>

        <section class="my-12">
            <RouterLink to="/week" class="">
              <div class="flex flex-col">
                <div class="text-sm lowercase">Week</div>
                <div class="font-light text-7xl">{{weekNumber}}</div>
              </div>
            </RouterLink>
        </section>

        <section>
            <dl>
                <dt class="text-sm lowercase">Completed</dt>
                <dd class="text-2xl font-light">
                  {{completedTasks.length}} / {{tasks.length}}
                </dd>
            </dl>
        </section>
      </nav>

      <main class="grow">
          <RouterView />
      </main>
    </div>
</template>
