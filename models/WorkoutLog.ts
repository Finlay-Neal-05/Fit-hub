import { SetData } from "./Set";
import { ExerciseData } from "./Exercise";

export interface WorkoutLog {
  user_id: number
  sets: SetData[]
  exercises: ExerciseData[]
}