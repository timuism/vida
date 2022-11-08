import { ApiServiceProvider } from "@/services/provider";
import { defineStore } from "pinia";
import { getCurrentInstance, ref } from "vue";
import type { Task } from "@/models/task";
import type { Ref } from "vue";

export const useTaskStore = defineStore('tasks', () => {
  const tasks:Ref<Task[]> = ref([])

  async function getTasks () {
    try { 
      const response = await new ApiServiceProvider()
      .getInstance()
      .getTasks()

      tasks.value = response
    } catch (error) {
      console.error("error: ", error)
    }
  }


  async function toggleTaskCompleted (data: any) {
    try {
      const response = await new ApiServiceProvider()
        .getInstance()
        .toggleTaskCompleted(data)

      getTasks()
      return response;
    } catch (error) {
      console.log(error)
    }
  }

  

  return {tasks, getTasks, toggleTaskCompleted}
})