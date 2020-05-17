import { Router } from 'https://deno.land/x/attain/mod.ts'
import { createUser, getUserByID, getUserByEmail } from '../controllers/users.js'

const router = new Router()

const sampleMiddleware = (req, res) => {
  console.log('before send', req.body)
}

router.post('/register', sampleMiddleware, async (req, res) => {
  // console.log("register", req.body);

  const reqBody = await req.body();

  // const body = await req.body

  // console.log("register", reqBody);

  const response = await createUser(reqBody.value)
  return res.status(response.status).send(response)
})

router.get('/:id', async (req, res) => {
  req.body.id = Number(req.params.id)
  const response = await getUserByID(req.body)
  return res.status(response.status).send(response)
})

router.get('/:email', async (req, res) => {
  req.body.email = req.params.email
  const response = await getUserByEmail(req.body)
  return res.status(response.status).send(response)
})

export default router
