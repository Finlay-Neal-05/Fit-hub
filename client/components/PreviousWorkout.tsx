interface Props {
  date: string
  workoutName: string
}

function PreviousWorkout(props: Props) {
  // genereate previousWOrkout based on the data received

  return (
    <div className="previous-workout">
      <h3 className="prev-workout-name">{props.workoutName}</h3>
      <p className="prev-workout-date">{props.date}</p>
      <p className="prev-workout-time">75 mins</p>
      <ul className="prev-workout-exercises">
        <li>lat pulldowns - 20kg</li>
        <li>benchpress - 10kg</li>
        <li>run - 10km...</li>
      </ul>
    </div>
  )
}

export default PreviousWorkout
