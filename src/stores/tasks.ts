import { defineStore } from "pinia";
import {ref} from "vue";
import type {Ref} from "vue";

interface Task {
  uuid: number
  text: string
  completed: false
}

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref([
    {uuid: 1, text: "Workout with a personal trainer", completed: true},
    {uuid: 2, text: "Drop off clothes at donation center", completed: false},
    {uuid: 3, text: "Spanish lesson with Daniela", completed: false},
  ])

  function addTasks(tasks: Task[]) {
    tasks.push(...tasks)
  }

  function removeTask(task: Task) {
    // @todo: implement removeTask()
  }

  function completeTask(task: Task) {
    // @todo: implement completeTask()
  }

  return { tasks, addTasks, removeTask, completeTask }
})