
import { Router } from 'express'
import * as travelsCtrl from '../controllers/travels.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()
router.get('/', travelsCtrl.index)

export {
  router
}
