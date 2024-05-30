import PreviousWorkout from '../components/PreviousWorkout'
import { Link } from 'react-router-dom'

function Home() {
  const currDate = new Date().toDateString()
  return (
    <>
      <div className="header">
        <h2>Welcome username!</h2>
        <p>{currDate}</p>
        <Link className="add-btn" to={`/log-workout`}>
          +
        </Link>
      </div>
      <PreviousWorkout />
      <PreviousWorkout />
      <PreviousWorkout />
    </>
  )
}

export default Home
