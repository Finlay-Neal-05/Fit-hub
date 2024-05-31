import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { WorkoutLog } from '../../models/WorkoutLog'

export default function useLogWorkout() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (log: WorkoutLog) => {
      console.log(log)
      await request.post(`/api/v1/users/logworkout`).send(log)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['workouts', 1] })
       // 1 should be id
    },
  })
}

// // IMPORT
// import { useNavigate, useNavigate } from 'react-router-dom'

// // INSIDE LOGWORKOUT PAGE
// const logWorkout = useLogWorkout()
// const navigate = useNavigate()

// // INSIDE HANDLE FINAL SUBMIT(log: WorkoutLog)
// await logWorkout.mutateAsync({log})
// navigate(`/`)
