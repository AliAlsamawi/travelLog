import { Travel } from "../models/travel.js"



//Get all travelogs
function index(req, res) {
  // console.log(req.user, "user")
  Travel.find({})
    .then((travels) => {
      res.render("travels/index", {
        travels,
        title: "travels",
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/travels")
    })
}

function createTravelLog(req, res) {
  res.render("travels/new", { title: "Create New Log" })
}

//create a travel log
function addTravelLog(req, res) {
  console.log(req.body)
  const body = {
    title: req.body.title,
    rating: req.body.rating,
    cost: req.body.cost,
    test: req.body.test,
    worththetrip: req.body.worththetrip,
    location: req.body.location,
    author: {
      id: req.user.profile._id,
      name: req.user.profile.name,
    },
  }
  Travel.create(body)
    .then((travel) => {
      res.redirect("/travels")
    })
    .catch((err) => {
      res.redirect("/")
    })
}

function getTravelLog(req, res) {
  Travel.findById(req.params.id)
    .populate("reviews")
    .then((travel) => {
      res.render("travels/show", {
        title: "Show Page",
        travel,
      })
    })
    .catch((err) => {
      res.redirect('/')
    })
}

export { index, 
  getTravelLog, 
  createTravelLog, 
  addTravelLog, 
}