
import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()
router.post("/:id/reviews", isLoggedIn, reviewsCtrl.createReview)

router.get("/:id/edit", reviewsCtrl.edit)

router.delete("/:id/reviews/:review_id", reviewsCtrl.delete)

export {
  router
}
