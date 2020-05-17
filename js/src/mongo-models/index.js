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
    password: database.password
  }
}

const dbVar = variables[environment]
console.log("dbVar", dbVar);

client.connectWithUri(`mongodb://${dbVar.hostname}:${dbVar.port}`);
const db = client.database(dbVar.dbname);

export default db