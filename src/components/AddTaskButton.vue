<script setup lang="ts">
import { useTaskStore } from '@/stores/tasks';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import ButtonPrimary from './ButtonPrimary.vue';

const store = useTaskStore();
const { tasks } = storeToRefs(store);
const { addTasks } = store

const showNewTaskWindow = ref(false)

const date = ref('');

function onCreateTaskClick(event: Event) {
  // @todo: gather data from new task fields
  // const newTask = {}
  // addTasks(newTask)
}
</script>

<template>
  <button @click="showNewTaskWindow = true" class="text-gray-100 duration-150 rounded-lg hover:text-gray">
    + Add new task
  </button>

  <div 
    v-if="showNewTaskWindow === true"
    class="absolute top-0 left-0 z-20 flex items-center justify-center w-screen h-screen bg-black/80 backdrop-blur-sm" 
  >
    <div class="relative flex flex-col bg-white w-[480px] h-[240px] rounded-md pb-4 px-4">
      <div class="absolute top-0 right-0 flex justify-end w-full py-2 mr-4">
        <button @click="showNewTaskWindow = false" class="duration-100 hover:scale-110">
          <icon :icon="['fas', 'close']" class="text-lg text-gray-100 hover:text-gray" />
        </button>
      </div>

      <form class="flex flex-col items-start justify-start mt-8 space-y-2 grow">
        <div class="grow">
          <fieldset class="flex w-full space-x-4">
            <input name="text" placeholder="Task name" class="pb-2 text-3xl outline-none" required />
          </fieldset>
          
          <fieldset class="flex items-center mt-2 space-x-2">
            <p class="italic font-semibold">on</p>
            <DatePicker v-model="date">
              <template #default="{ inputValue, togglePopover, hidePopover }">
                <button 
                  class="px-8 py-2 text-sm border-2 border-dashed text-gray rounded-xl "
                >
                Today
                </button>
              </template>
            </DatePicker>
          </fieldset>
        </div>

        <fieldset class="mt-auto shrink">
          <ButtonPrimary @click="onCreateTaskClick">
            Create Task
          </ButtonPrimary>
        </fieldset>
      </form>
    </div>
  </div>
</template>