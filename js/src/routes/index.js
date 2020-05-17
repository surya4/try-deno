import { Router } from 'https://deno.land/x/attain/mod.ts';
import { getIndex } from '../controllers/index.js'

const router = new Router()

router.get('/', async (req, res) => {
  const response = await getIndex()
  return res.status(response.status).send(response)
})

export default router
