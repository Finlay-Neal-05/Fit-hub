/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

import knex from "knex";
export const up = function(knex) {
  return knex.schema.createTable('exercises', (table) => {
    table.increments('id')
    table.integer('user_id')
    table.string('name')
    table.string('type')
    table.string('musclegroup')
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down() {
  return knex.schema.dropTable('exercises')
}
  
};
