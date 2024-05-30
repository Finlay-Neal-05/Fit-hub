/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
import knex from "knex"

export async function up() {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('name')
    table.string('password')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down() {
  return knex.schema.dropTable('users')
}
