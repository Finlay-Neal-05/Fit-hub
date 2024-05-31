import { ChangeEvent, FormEvent, useState } from 'react'
import { WorkoutLog } from '../../models/WorkoutLog'
import { SetData } from '../../models/Set'
import { WorkoutData } from '../../models/Workouts'
import { Exercise, ExerciseData } from '../../models/Exercise'
import { Set } from '../../models/Set'

// interface Props extends WorkoutLog {
//   submitLabel: string
//   onSubmit: (_: WorkoutLog) => void
// }

export function EditWorkoutForm() {

  const [formState, setFormState] = useState<WorkoutData>({
    user_id: 1,
    workout_name: '',
    date: '',
    is_shared: false,
  })

  const [log, setLog] = useState<WorkoutLog>({
    workout: {} as WorkoutData,
    sets: [],
    exercises: [],
})

const [setsForm, setSetsForm] = useState({
  reps: '',
  weight: '',
  time: '',
  exerciseName: '',
  exerciseType: '',
  muscleGroup: '',

})

const [setsArr, setSetArr] = useState<SetData[]>([])
const [exercisesArr, setExercisesArr] = useState<ExerciseData[]>([])

  const [hasWorkout, setHasWorkout] = useState(false)
  
  // const log: WorkoutLog = {
  //   workout: {} as WorkoutData,
  //   sets: [],
  //   exercises: [],
  // }
  
  const handleChange = (
    evt: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { id, value } = evt.target
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  // <-- HANDLE SETS CHANGE --> //

  const handleSetChange = (evt: ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >) => {
    const { id, value } = evt.target
  setSetsForm((prev) => ({
    ...prev,
    [id]: value,
  }))}

  const handleAddSet = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    //const { reps, time, weight, exerciseName, exerciseType, muscleGroup } = setsForm
    const newSet: SetData = {reps: setsForm.reps, time: setsForm.reps, weight: setsForm.weight}
    const newExercise: ExerciseData = {name: setsForm.exerciseName, type: setsForm.exerciseType, muscle_group: setsForm.muscleGroup}
    setSetArr([...setsArr, newSet])
    setExercisesArr([...exercisesArr, newExercise])
    console.log(setsForm) // THIS IS NOT A STATE, THIS IS THE FORM REGARDING SETS!!!!!
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLog((prevLog) => ({
      ...prevLog,
      workout: formState,
    }))
    setHasWorkout(true)

    // const formData = new FormData(e.currentTarget)
    // const payload = Object.fromEntries(formData)
    console.log(log.workout)
  }

  const user_info_id = 1

  // export interface ExerciseData {
  // name: string
  // type: string
  // muscle_group: string
  // }

  // export interface SetData {
  //   reps: string
  //   time: string
  //   weight: string
  // }
  //
  // WorkoutName
  // date
  // -- set --
  // exercize name
  // reps
  // weight
  // time
  // muscle group
  // type

  return (
    <>
      {!hasWorkout ?  (
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="workout_name">workout name:</label>
          <input
            value={formState.workout_name}
            onChange={handleChange}
            type="text"
            id="workout_name"
          />
        </div>
        <button type="submit">set workout</button>
      </form>) : (
    <> {/* set */}
        <div>{log.workout.workout_name}</div>
        {/*  SETS */}
        <form onSubmit={handleAddSet}>
          <div className="form-input">
            <label htmlFor="reps">reps:</label>
            <input
              value={setsForm.reps}
              onChange={handleSetChange}
              type="text"
              id='reps'
            />
          </div>
          <div className="form-input">
            <label htmlFor="weight">weight:</label>
            <input
              value={setsForm.weight}
              onChange={handleSetChange}
              type="text"
              id="weight"
            />
          </div>
          <div className="form-input">
            <label htmlFor="time">time:</label>
            <input
              value={setsForm.time}
              onChange={handleSetChange}
              type="text"
              id="time"
            />
          </div>
          <div className="form-input">
            <label htmlFor="exerciseName">Exercise name:</label>
            <input
              value={setsForm.exerciseName}
              onChange={handleSetChange}
              type="text"
              id='exerciseName'
            />
          </div>
          <div className="form-input">
            <label htmlFor="exerciseType">Exercise type:</label>
            <input
              value={setsForm.exerciseType}
              onChange={handleSetChange}
              type="text"
              id="exerciseType"
            />
          </div>
          <div className="form-input">
            <label htmlFor="muscleGroup">Muscle group:</label>
            <input
              value={setsForm.muscleGroup}
              onChange={handleSetChange}
              type="text"
              id="muscleGroup"
            />
          </div>
        <button type="submit">add set</button>
      </form>
    </>
      )
      }
    </>
  )
}

export default EditWorkoutForm
