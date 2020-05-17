import 'https://deno.land/x/denv/mod.ts'

const database = {
  hostname: Deno.env.get('DB_HOST'),
  username: Deno.env.get('DB_USER'),
  password: Deno.env.get('DB_PASSWORD'),
  dbname: Deno.env.get('DB_DATABASE'),
  maxPool: parseInt(Deno.env.get('DB_MAX_POOL')) || 50,
  minPool: parseInt(Deno.env.get('DB_MIN_POOL')) || 1
}

// server details
const server = {
  host: Deno.env.get('SERVER_HOST') || '127.0.0.1',
  port: Deno.env.get('SERVER_PORT') || 3000
}

const environment = Deno.env.get('ENVIRONMENT') || 'development'

export {
  database,
  server,
  environment
}
