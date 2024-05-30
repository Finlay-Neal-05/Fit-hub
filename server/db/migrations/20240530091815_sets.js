export function up(knex) {
  return knex.schema.createTable('sets', (table) => {
    table.increments('id').primary()
    table.integer('workout_id')
    table.integer('exercise_id')
    table.string('reps')
    table.string('time')
    table.string('weight')
  })
}

export function down(knex) {
  return knex.schema.dropTable('sets')
}
