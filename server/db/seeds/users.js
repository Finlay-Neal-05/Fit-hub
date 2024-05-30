/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, name: 'Shane', password: '123'},
    {id: 2, name: 'Andrew', password: '123'},
    {id: 3, name: 'Tasman', password: '123'},
    {id: 4, name: 'Finlay', password: '123'},
  ]);
};
