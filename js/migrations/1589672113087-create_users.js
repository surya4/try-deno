import { Schema } from 'https://deno.land/x/nessie/mod.ts'

export const up = () => {
  Schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('email', 32).notNullable()
    table.string('name')
    table.string('password').notNullable()
    table.integer('age').unsigned().notNullable()
    table.timestamps(null, true)
  }).toString()
}

export const down = () => {
  Schema.drop('users')
}
