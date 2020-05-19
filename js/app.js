
import { App } from 'https://deno.land/x/attain/mod.ts'

// routes
import indexRoute from './src/routes/index.js'
import usersRoute from './src/routes/users.js'

// // Logging response method status path time
// app.use(logger)

// load db migrations
// import './../js/src/sql-models/migrations/index.js'


const app = new App()

app.use('/index', indexRoute)
app.use('/user', usersRoute)

export default app
