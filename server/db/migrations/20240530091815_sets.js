/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

import knex from "knex";
export const up = function(knex) {
  return knex.schema.createTable('sets', (table) => {
    table.increments('id')
    table.integer('workout_id')
    table.integer('exercise_id')
    table.string('reps')
    table.string('time')
    table.string('weight')
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down() {
  return knex.schema.dropTable('sets')
}
  
};
