export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('password')
  })
}

export function down(knex) {
  return knex.schema.dropTable('users')
}