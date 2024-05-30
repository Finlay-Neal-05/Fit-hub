/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('workouts').del()
  await knex('workouts').insert([
    {id: 1, user_id: 1, workout_name: 'back', date: '15/05', is_shared: false},
    {id: 2, user_id: 2, workout_name: 'chest', date: '15/05', is_shared: false},
    {id: 3, user_id: 3, workout_name: 'legs', date: '15/05', is_shared: false}
  ]);
};
