export function up(knex) {
  return knex.schema.createTable('exercises', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('name')
    table.string('type')
    table.string('muscle_group')
  })
}

export function down(knex) {
  return knex.schema.dropTable('exercises')
}