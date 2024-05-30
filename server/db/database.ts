import connection from './connection.ts'
import { User, UserData } from '../../models/User.ts'
import { Workout } from '../../models/Workouts.ts'
import { WorkoutLog } from '../../models/WorkoutLog.ts'

export async function getAllUsers(): Promise<User[]> {
  return await connection('users').select()
}

export async function getUserById(id: number): Promise<User> {
  const res = await connection('users').where({id}).first()
  return res
}

export async function getUserWorkoutsById(id: number): Promise<Workout[]> {
  const res = await connection('workouts').where('workouts.user_id', id)
  console.log(res)
  return res
}

export async function createNewUser(user: UserData): Promise<void> {
  return await connection('users').insert({...user})
}

export async function logWorkout(log?: WorkoutLog): Promise<void> {
  const res = await connection('workouts')
  .join('sets', 'sets.workout_id', 'workouts.id')
  .join('exercises', 'sets.exercise_id', 'exercises.id')
  console.log(res)
}
