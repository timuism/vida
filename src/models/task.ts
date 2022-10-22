interface TaskData {
  id: number
  task_name: string
  completed: false
  created_at: string
  due_date: string
  start_date: string
  end_date: string
  description: string
  date_completed: string
  user_id: string
}

export class Task {
  id!: number
  taskName!: string
  completed!: boolean
  createdAt!: string
  dueDate!: string
  startDate!: string
  endDate!: string
  dateCompleted!: string
  userId!: string

  constructor (taskData: TaskData) {
    this.id = taskData.id
    this.taskName = taskData.task_name
    this.completed = taskData.completed
    this.createdAt = taskData.created_at
    this.dueDate = taskData.due_date
    this.startDate = taskData.start_date
    this.endDate = taskData.end_date
    this.dateCompleted = taskData.date_completed
    this.userId = taskData.user_id
    
  }
}