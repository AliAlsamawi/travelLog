
import { Router } from 'express'
import * as travelsCtrl from '../controllers/travels.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()
router.get('/', travelsCtrl.index)
router.get("/new", travelsCtrl.createTravelLog)
router.get("/:id", travelsCtrl.getTravelLog)

router.post("/", isLoggedIn, travelsCtrl.addTravelLog) //create new travel log

export {
  router
}
