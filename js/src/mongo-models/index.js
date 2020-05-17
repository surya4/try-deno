import { init, MongoClient } from "https://deno.land/x/mongo@v0.6.0/mod.ts";
import { database, environment } from '../../config/constants.js'

await init();
const client = new MongoClient();

const variables = {
  development: {
    client: 'mongo',
    host: database.hostname,
    user: database.username,
    database: database.dbname,
    password: database.password,
    port: database.port
  }
}

const dbVar = variables[environment]

const uri = `mongodb://${dbVar.host}:${dbVar.port}`

client.connectWithUri(uri);
const db = client.database(dbVar.database);

export default db