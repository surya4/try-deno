import 'https://deno.land/x/denv/mod.ts'

export const database = {
  hostname: Deno.env.get('DB_HOST'),
  username: Deno.env.get('DB_USER'),
  password: Deno.env.get('DB_PASSWORD'),
  dbname: Deno.env.get('DB_DATABASE'),
  maxPool: parseInt(Deno.env.get('DB_MAX_POOL')) || 2,
  minPool: parseInt(Deno.env.get('DB_MIN_POOL')) || 1,
  port: Deno.env.get('DB_PORT')
}

// server details
export const server = {
  host: Deno.env.get('SERVER_HOST') || '127.0.0.1',
  port: Deno.env.get('SERVER_PORT') || 3000
}

export const environment = Deno.env.get('ENVIRONMENT') || 'development'
export const hashSalt = Deno.env.get('SALT') || 10

export const cache = {
  hostname: Deno.env.get('CACHE_HOST') || '127.0.0.1',
  port: Deno.env.get('CACHE_HOST') || 6379,
  expiry: 1000 * 60 * 60 * 24,
  prefix: 'boilerplate'
}
