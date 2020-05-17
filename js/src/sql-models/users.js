import { dex, dexecutor } from './index.js'

export const createUserModel = async (data) => {
  const query = dex.queryBuilder()
    .insert({
      name: data.name || null,
      email: data.email,
      password: data.password,
      age: data.age
    })
    .into('users')
    .toString()

  const out = await dexecutor.execute(query)
  return out
}

export const getDetailsByIdModel = async (id) => {
  const query = dex.select('*')
    .from('users')
    .where('id', '=', id)

  const out = await dexecutor.execute(query)
  return out
}

export const getDetailsByEmailModel = async (email) => {
  const query = dex.select('*')
    .from('users')
    .where('email', '=', email)

  const out = await dexecutor.execute(query)
  return out
}
