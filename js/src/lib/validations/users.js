import { errorResponse } from '../common/response.js'

// const {successResponse, errorResponse} = require('../lib/response')
// const {validateEmail, validatePhone} = require('../lib/utilities')

export const validateUserRegister = async (body) => {
  const bodyStruct = {}
  const arr = ['name', 'email', 'password', 'age']

  // console.log("body", body);
  

  if (!body.password || body.password.length < 4) {
    throw errorResponse(401, 'shortPassword')
  }

  arr.map((item) => {
    const check = Object.prototype.hasOwnProperty.call(body, item)
    if (!check) throw errorResponse(400, item + 'Missing')
    bodyStruct[item] = body[item]
  })

  return bodyStruct
}
