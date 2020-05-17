import { Router } from 'https://deno.land/x/attain/mod.ts'
import { createUser, getUserByID, getUserByEmail } from '../controllers/users.js'
import { sampleMiddleware } from '../lib/middlewares.js'

const router = new Router()

router.post('/register', sampleMiddleware, async (req, res) => {
  const reqBody = await req.body()
  const response = await createUser(reqBody.value)
  return res.status(response.status).send(response)
})

router.get('/:id', async (req, res) => {
  req.body.id = req.params.id
  const response = await getUserByID(req.body)
  return res.status(response.status).send(response)
})

router.get('/email/:email', async (req, res) => {
  req.body.email = req.params.email
  const response = await getUserByEmail(req.body)
  return res.status(response.status).send(response)
})

export default router
