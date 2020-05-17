import db from './index.js'

const users = db.collection('users')

export const createUserModel = async (data) => {
  const response = await users.insertOne(data)
  return response
}

export const getDetailsByIdModel = async (id) => {
  const response = await users.findOne({ _id: { $oid: id } })
  return response
}

export const getDetailsByEmailModel = async (email) => {
  const response = await users.findOne({ email })
  return response
}
