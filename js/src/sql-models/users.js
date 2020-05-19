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
  return out.rows
}

export const getDetailsByIdModel = async (id) => {
  const query = dex.select('*')
    .from('users')
    .where('id', '=', id)
    .toString()

  const out = await dexecutor.execute(query)
  return out.rows
}

export const getDetailsByEmailModel = async (email) => {
  const query = dex.select()
    .from('users')
    .where({ email })
    .toString()


  const out = await dexecutor.execute(query)
  return out.rows
}
