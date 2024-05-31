import PreviousWorkout from '../components/PreviousWorkout'
import { Link } from 'react-router-dom'

// get the data from the backend with the workoutData

// /api/v1/users/getworkoutsbyid/:id

function Home() {
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
      {/* map over workoutt data to generate PreviousWorkouts */}
      <PreviousWorkout />
      <PreviousWorkout />
      <PreviousWorkout />
    </>
  )
}

export default Home
