import { SetData } from "./Set";
import { ExerciseData } from "./Exercise";
import { WorkoutData } from "./Workouts";

export interface WorkoutLog {
  user_id: number
  workout: WorkoutData
  sets: SetData[]
  exercises: ExerciseData[]
}