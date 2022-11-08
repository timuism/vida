<script setup lang="ts">
import { ApiServiceProvider } from '@/services/provider';
import {useTaskStore} from '@/stores/task'
import { storeToRefs } from 'pinia'
import {computed, onMounted, reactive, ref} from 'vue'
import moment from 'moment'

const {tasks} = storeToRefs(useTaskStore())
const weekNumber = moment().week()

const completedTasks = computed(() => {
  return tasks.value.filter(task => {
    return task.completed
  })
})
</script>

<template>
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
</template>