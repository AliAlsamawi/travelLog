import { Review } from "../models/review.js"
import { Travel } from "../models/travel.js"

function createReview(req, res) {
  Travel.findById(req.params.id).then((travelLog) => {
    const body = {
      review: req.body.review,
      author: {
        id: req.user.profile._id,
        name: req.user.profile.name,
      },
    }
    Review.create(body).then((review) => {
      travelLog.reviews.push(review._id)
      travelLog.save()
      res.redirect(`/travels/${req.params.id}`)
    })
  })
}

function edit(req, res) {
  Travel.findById(req.params.id)
  .then(review => {
    res.render("reviews/edit", {
      title: "Edit review",
      review,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/travels/${req.params.id}`)
  })
}

function update(req, res) {
  Travel.findById(req.params.id)
  .then(review => {
    if (review.owner.equals(req.user.profile._id)) {
      // the person that created the taco is trying to edit the taco
      req.body.review = !!req.body.review
      review.updateOne(req.body, {new: true})
      .then(() => {
        res.redirect(`/travels/${req.params.id}`)
      })
    } else {
      // the person that created the taco is NOT the person trying to edit the taco
      throw new Error ("🚫 Not Authorized! 🚫")
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/travels/${req.params.id}`)
  })
}

function deleteReview(req, res) {
  Travel.findByIdAndUpdate(req.params.id, {
    $pull: {
      reviews: req.params.review_id
    }
  }).then(travel=> {
    res.redirect(`/travels/${req.params.id}`)
  })
  }


export {
  createReview,
  deleteReview as delete,
  update,
  edit,
}