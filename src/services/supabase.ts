import { Task } from '@/models/task';
import type {ApiService} from '@/services/provider'
import { createClient } from '@supabase/supabase-js'

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

  getTask () {
    // @todo: implement
    return {}
  }
  
  addTask (task: any) {
    // @todo: implement
    return true;
  }

  deleteTask (task: any) {
    // @todo: implement
    return true
  }

  updateTask (task: any) {
    // @todo: implement
    return true
  }
  
}