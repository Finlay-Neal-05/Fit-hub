/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

import knex from "knex";
export const up = function(knex) {
  return knex.schema.createTable('workouts', (table) => {
    table.increments('id')
    table.integer('user_id')
    table.string('workout_name')
    table.string('date')
    table.boolean('is_shared')
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down() {
  return knex.schema.dropTable('workouts')
}
  
};
