import db from './index.js'

// const database = db.getDatabase
const users = db.collection('users')

export const createUserModel = async (data) => {
  const response = await users.insertOne(data)
  console.log("response1", response)
  return response
}

export const getDetailsByIdModel = async (id) => {
  const response = await users.findOne({ _id: id });
  console.log("response2", response)
  return response
}

export const getDetailsByEmailModel = async (email) => {
  const response = await users.findOne({ email });
  console.log("response3", response)
  return response
}
