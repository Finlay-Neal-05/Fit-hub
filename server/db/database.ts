import connection from './connection.ts'
import { User } from '../../models/User.ts'

export async function getAllUsers(): Promise<User[]> {
  return connection('users').select()
}

export async function getUserById(id: number): Promise<User> {
  return connection('users').where({id}).first()
}
