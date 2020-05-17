import * as bcrypt from 'https://deno.land/x/bcrypt/mod.ts'

// import { createUserModel, getDetailsByIdModel, getDetailsByEmailModel } from '../sql-models/users.js'
import { createUserModel, getDetailsByIdModel, getDetailsByEmailModel } from '../mongo-models/users.js'
import { successResponse, errorResponse } from '../lib/common/response.js'
import { validateUserRegister } from '../lib/validations/users.js'
import { hashSalt } from '../../config/constants.js'
import { getJSON, setJSON } from '../lib/cache.js'
import { logError } from '../lib/logger.js'

const saltRounds = bcrypt.gensalt(hashSalt)

export const createUser = async (reqData) => {
  try {
    const validInput = await validateUserRegister(reqData)
    const userExists = await getDetailsByEmailModel(validInput.email)

    if (userExists) {
      return errorResponse(403, 'userExists')
    }
    validInput.password = bcrypt.hashpw(String(validInput.password), saltRounds)
    const response = await createUserModel(validInput)
    return successResponse(201, response)
  } catch (error) {
    logError('users.createUser', error)
    return errorResponse(error.status, error.message)
  }
}

export const getUserByID = async (reqData) => {
  let response
  try {
    response = await getJSON(reqData.id)
    if (response) {
      return successResponse(200, response)
    }

    response = await getDetailsByIdModel(reqData.id)
    await setJSON(reqData.id, response)

    return successResponse(200, response)
  } catch (error) {
    logError('users.getUserByID', error)
    return errorResponse(error.status, error.message)
  }
}

export const getUserByEmail = async (reqData) => {
  try {
    const response = await getDetailsByEmailModel(reqData.email)
    return successResponse(200, response)
  } catch (error) {
    logError('users.getUserByEmail', error)
    return errorResponse(error.status, error.message)
  }
}
