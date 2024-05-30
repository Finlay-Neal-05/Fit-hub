export interface ExerciseData {
  user_id: number
  name: string
  type: string
  muscle_group: string
}

export interface Exercise extends ExerciseData {
  id: number
}