import { Travel } from "../models/travel.js"


//Get all travelogs
function index(req, res) {
  console.log(req.user, "user")
  Travel.find({})
    .then((travels) => {
      res.render("travels/index", {
        travels,
        title: "travels",
      })
      // res.json(travels)
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/travels")
    })
}

export {
index,
}
