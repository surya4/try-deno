import { bold, yellow } from 'https://deno.land/std@0.51.0/fmt/colors.ts'

import app from './app.js'
import { server } from './config/constants.js'

const HOST = server.host
const PORT = server.port

app.listen({ port: PORT })
console.log(bold('Start listening on ') + yellow(`${HOST}:${PORT}`))
