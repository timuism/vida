import type { Task } from "@/models/task"
import { SupabaseApiService } from "./supabase"

export interface ApiService {
  getTasks: () => Promise<Task[]>
  getTask: () => Promise<any>
  addTask: (task: any) => Promise<boolean>
  deleteTask: (task: any) => boolean
  updateTask: (task: any) => Promise<Task[]>
  toggleTaskCompleted: (task: any) => Promise<Task>
}

export class ApiServiceProvider {
  service: ApiService;

  constructor () {
    this.service = new SupabaseApiService()
  }

  getInstance() {
    return this.service;
  }
}