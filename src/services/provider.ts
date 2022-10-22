import type { Task } from "@/models/task"
import { SupabaseApiService } from "./supabase"

export interface ApiService {
  getTasks: () => Promise<Task[]>
  getTask: () => Promise<any>
  addTask: (task: any) => boolean
  deleteTask: (task: any) => boolean
  updateTask: (task: any) => boolean
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