import { createUserModel, getDetailsByIdModel, getDetailsByEmailModel } from '../models/users.js'
// import { createUserModel, getDetailsByIdModel, getDetailsByEmailModel } from '../mongo-models/users.js'
import { successResponse, errorResponse } from '../lib/common/response.js'
import { validateUserRegister } from '../lib/validations/users.js'

export const createUser = async (reqData) => {
  try {
    // console.log("createUser", reqData());
    const validInput = await validateUserRegister(reqData)
    // console.log("validInput", validInput);
    
    const userExists = await getDetailsByEmailModel(validInput.email)
    console.log('userExists -> ', userExists)

    // if (userExists && userExists.length) {
    //   return errorResponse(403, 'userExists')
    // }
    // validInput.password = bcrypt.hashSync(String(validInput.password), saltRounds)
    // const response = await usersModel.createUser(validInput)
    // await usersModel.createPermission({user_id: response[0]})
    return successResponse(201, validInput)
  } catch (error) {
    // console.error('error -> ', logStruct('createUser', error))
    console.log('error -> ', error)
    return errorResponse(error.status, error.message)
  }
}

export const getUserByID = async (reqData) => {
  try {
    // const validInput = await validateUserRegister(reqData)
    // const userExists = await usersModel.getUserDetailsByEmail(validInput.email)
    // if (userExists && userExists.length) {
    //   return errorResponse(403, 'userExists')
    // }
    // validInput.password = bcrypt.hashSync(String(validInput.password), saltRounds)
    // const response = await usersModel.createUser(validInput)
    // await usersModel.createPermission({user_id: response[0]})
    return successResponse(200)
  } catch (error) {
    // console.error('error -> ', logStruct('createUser', error))
    console.error('error -> ', error)
    return errorResponse(error.status, error.message)
  }
}

export const getUserByEmail = async (reqData) => {
  try {
    // const validInput = await validateUserRegister(reqData)
    // const userExists = await usersModel.getUserDetailsByEmail(validInput.email)
    // if (userExists && userExists.length) {
    //   return errorResponse(403, 'userExists')
    // }
    // validInput.password = bcrypt.hashSync(String(validInput.password), saltRounds)
    // const response = await usersModel.createUser(validInput)
    // await usersModel.createPermission({user_id: response[0]})
    return successResponse(200)
  } catch (error) {
    // console.error('error -> ', logStruct('createUser', error))
    console.error('error -> ', error)
    return errorResponse(error.status, error.message)
  }
}
