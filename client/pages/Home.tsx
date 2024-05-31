import PreviousWorkout from '../components/PreviousWorkout'
import { Link } from 'react-router-dom'
import useWorkouts from '../hooks/useWorkouts'

// get the data from the backend with the workoutData

// /api/v1/users/getworkoutsbyid/:id

function Home() {
  const { data, isError, isLoading, error } = useWorkouts(1)

  if (isLoading) {
    return (
      <>
        <h3>Is loading...</h3>
      </>
    )
  }

  if (isError || !data) {
    return <p>Failed {String(error)}</p>
  }

  console.log(data)

  const currDate = new Date().toDateString()
  return (
    <>
      <div className="header">
        <Link className="add-btn" to={`/log-workout`}>
          +
        </Link>
        <h2>Welcome username!</h2>
        <p>{currDate}</p>
      </div>
      {data.map((workout) => {
        return (
          <PreviousWorkout
            key={workout.id}
            workoutName={workout.workout_name}
            date={workout.date}
          />
        )
      })}
    </>
  )
}

export default Home
