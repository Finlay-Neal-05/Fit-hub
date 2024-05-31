import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

// export default function useSchedule(day: string) {
//   return useQuery({
//     queryFn: async () => {
//       const res = await request.get(`/api/v1/schedule/${day}`)
//       return res.body as { events: EventWithLocation[] }
//     },

//     queryKey: ['schedule', day],
//   })
// }

// /api/v1/users/getworkoutsbyid/:id

export default function useWorkouts(id: number) {
  return useQuery({
    queryFn: async () => {
      const res = await request.get(`/api/v1/users/getworkoutsbyid/:${id}`)
      return res.body
    },
  })
}
