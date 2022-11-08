import { Task } from '@/models/task'
import type {ApiService} from '@/services/provider'
import { createClient } from '@supabase/supabase-js'
import moment from 'moment'

export class SupabaseApiService implements ApiService {
  supabase: any;

  constructor() {
    this.supabase = createClient(
      'https://xkjmtewvwcwnkpefyijm.supabase.co', 
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhram10ZXd2d2N3bmtwZWZ5aWptIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1Mzg4MTc5OSwiZXhwIjoxOTY5NDU3Nzk5fQ.XZ-4kN53ZOe7uJFZlQ-JWsse1o-1Dl1-t23huHWnfAI'
    );
  }

  async getTasks ():Promise<Task[]> {
    const { data, error } = await this.supabase
      .from('Tasks')
      .select()

    console.log({data, error})
    return data.map((t: any) => new Task(t));
  }

  async getTask (): Promise<Task> {
    // @todo: implement
    return new Task({});
  }
  
  async addTask (task: any):Promise<boolean> {
    const { data, error } = await this.supabase
      .from('Tasks')
      .insert(task)
      .select()

    console.log(error, data)
    return error ?? data;
  }

  deleteTask (task: any) {
    // @todo: implement
    return true
  }

  async toggleTaskCompleted (task: any):Promise<Task[]> {
    const { data, error } = await this.supabase
      .from('Tasks')
      .update({ completed: !task.completed })
      .eq('id', task.id)
      .select()

    if(error) {
      console.error(error)
    }
    
    return data 
      ? data.map((t:any) => new Task(t)) 
      : error
  }

  async getTasksForToday() {
    const { data, error } = await this.supabase
      .from('Tasks')
      .select()
      .eq('due_date', moment().format('YYYY-MM-DD'))

      console.log(data, error)
      return data ? data.map((t: any) => new Task(t)) : error
  }

  async getTaskForThisWeek() {
    // @todo: implement
  }
  
}