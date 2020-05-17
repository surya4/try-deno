import Dex from 'https://deno.land/x/dex/mod.ts'
import Dexecutor from "https://raw.githubusercontent.com/denjucks/dexecutor/master/mod.ts";
import { database, environment } from '../../config/constants.js'

const variables = {
  development: {
    client: 'mysql',
    connection: {
      host: database.hostname,
      user: database.username,
      database: database.dbname,
      password: database.password
    },
    pool: {
      max: database.maxPool,
      min: database.minPool
    }
  }
}

const dex = Dex({client: variables[environment].client });
const dexecutor = new Dexecutor(variables[environment])

await dexecutor.connect();

export {
  dex,
  dexecutor
}
