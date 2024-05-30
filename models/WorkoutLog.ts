import { SetData } from "./Set";
import { ExerciseData } from "./Exercise";
import { WorkoutData } from "./Workouts";

export interface WorkoutLog {
  workout: WorkoutData
  sets: SetData[]
  exercises: ExerciseData[]
}