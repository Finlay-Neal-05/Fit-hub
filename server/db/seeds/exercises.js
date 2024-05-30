/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('exercises').del()
  await knex('exercises').insert([
    {id: 1, user_id: 1, name: 'lat_pulldown', type: 'weight', muscle_group: 'back'},
    {id: 2, user_id: 2, name: 'incline_dumbell_press', type: 'weight', muscle_group: 'chest'},
    {id: 3, user_id: 3, name: 'squats', type: 'weight', muscle_group: 'legs'}
  ]);
};
