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

  console.info('query1 -->', query.toQuery())

  const out = await dexecutor.execute(query)
  return out
  // return query
}

export const getDetailsByIdModel = async (id) => {
  const query = dex.select('*')
    .from('users')
    .where('id', '=', id)

  // console.info('query2 -->', query.toQuery())
  // return query
  const out = await dexecutor.execute(query)
  return out
}

export const getDetailsByEmailModel = async (email) => {
  const query = dex.select('*')
    .from('users')
    .where('email', '=', email)

  console.info('query3 -->', query.toQuery())
  // return query

  const out = await dexecutor.execute(query)
  console.log('out', out)
  
  return out
}
