import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

export default function useWorkouts(id: number) {
  return useQuery({
    queryFn: async () => {
      const res = await request.get(`/api/v1/users/getworkoutsbyid/${id}`)
      return res.body
    },

    queryKey: ['workouts', id],
  })
}
