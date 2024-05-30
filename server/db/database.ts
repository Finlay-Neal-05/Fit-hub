import connection from './connection.ts'
import { User } from '../../models/User.ts'
import { Workout } from '../../models/Workouts.ts'

export async function getAllUsers(): Promise<User[]> {
  return connection('users').select()
}

export async function getUserById(id: number): Promise<User> {
  return connection('users').where({id}).first()
}

export async function getUserWorkoutsById(id: number): Promise<Workout[]> {
  const response = connection('workouts').join('users', 'workouts.user_id', 'users.id').where({id})
  console.log(response)
  return response
}
