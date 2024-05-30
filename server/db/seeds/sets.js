/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('sets').del()
  await knex('sets').insert([
    {id: 1, workout_id: 1, exercise_id: 1, reps: '10 reps', time: '10min', weight: '25kg'},
    {id: 2, workout_id: 2, exercise_id: 2, reps: '10 reps', time: '10min', weight: '25kg'},
    {id: 3, workout_id: 3, exercise_id: 3, reps: '10 reps', time: '10min', weight: '25kg'}
  ]);
};
