function PreviousWorkout() {
  // genereate previousWOrkout based on the data received

  return (
    <div className="previous-workout">
      <h3 className="prev-workout-name">Name</h3>
      <p className="prev-workout-date">31/05</p>
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
