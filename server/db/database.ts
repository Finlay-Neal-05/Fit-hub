import connection from './connection.ts'
import { User, UserData } from '../../models/User.ts'
import { Workout, WorkoutData } from '../../models/Workouts.ts'
import { WorkoutLog } from '../../models/WorkoutLog.ts'
import { ExerciseData } from '../../models/Exercise.ts'

export async function getAllUsers(): Promise<User[]> {
  return await connection('users').select()
}

export async function getUserById(id: number): Promise<User> {
  const res = await connection('users').where({ id }).first()
  return res
}

export async function getUserWorkoutsById(id: number): Promise<Workout[]> {
  const res = await connection('workouts').where('workouts.user_id', id)
  return res
}

export async function createNewUser(user: UserData): Promise<void> {
  return await connection('users').insert({ ...user })
}

export async function logWorkout(log: WorkoutLog): Promise<void> {
  const { workout, sets, exercises } = log
  const workout_id: number = await logWorkoutReturnId(workout)
  const exerciseIds: number[] = await getExerciseIds(exercises)
  console.log(exerciseIds)
  sets.map((set) => (set.workout_id = workout_id[0]))
  console.log(sets)
  sets.map((set, index) => (set.exercise_id = exerciseIds[index]))
  console.log(sets)
  await connection('sets').insert(sets)
}

async function logWorkoutReturnId(workout: WorkoutData): Promise<number> {
  return await connection('workouts').insert(workout)
}

async function getExerciseIds(exercises: ExerciseData[]): Promise<number[]> {
  const res = await connection('exercises').insert(exercises)
  const newArray: number[] = []
  for (let i = res[0]; i > res[0] - exercises.length; i--) {
    newArray.push(i)
  }
  return newArray.reverse()
}
