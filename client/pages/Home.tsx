import PreviousWorkout from '../components/PreviousWorkout'

function Home() {
  const currDate = new Date().toDateString()
  return (
    <>
      <h2>Welcome username!</h2>
      <p>{currDate}</p>
      <PreviousWorkout />
      <PreviousWorkout />
      <PreviousWorkout />
    </>
  )
}

export default Home
