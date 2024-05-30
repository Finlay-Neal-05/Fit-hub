/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {name: 'Shane', password: '123'},
    {name: 'Andrew', password: '123'},
    {name: 'Tasman', password: '123'},
    {name: 'Finlay', password: '123'},
  ]);
};
