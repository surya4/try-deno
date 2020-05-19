// Users Schema
import './users.js'
import { database } from '../../../config/constants.js'

import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
  hostname: database.hostname,
  username: database.username,
  db: database.dbname,
  poolSize: database.maxPool, 
  password: database.password,
});

await client.execute(`CREATE DATABASE IF NOT EXISTS ${database.dbname}`);
await client.execute(`USE ${database.dbname}`);

import {usersSchema} from './users.js'
await client.execute(usersSchema)

await client.close();
