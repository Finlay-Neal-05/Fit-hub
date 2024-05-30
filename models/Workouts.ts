export interface WorkoutData {
  user_id: number
  workout_name: string
  date: string
  is_shared: boolean
}

export interface Workout extends WorkoutData {
  id: number
}