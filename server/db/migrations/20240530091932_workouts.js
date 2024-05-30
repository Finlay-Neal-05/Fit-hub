export function up(knex) {
  return knex.schema.createTable('workouts', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('workout_name')
    table.string('date')
    table.boolean('is_shared')
  })
}

export function down(knex) {
  return knex.schema.dropTable('workouts')
}
