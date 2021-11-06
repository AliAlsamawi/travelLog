
import { Router } from 'express'
import * as travelsCtrl from '../controllers/travels.js'


const router = Router()
router.get('/', travelsCtrl.index)

export {
  router
}
