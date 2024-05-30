export interface SetData {
  workout_id: number
  exercise_id: number
  reps: string
  time: string
  weight: string
}

export interface Set extends SetData {
  id: number
}