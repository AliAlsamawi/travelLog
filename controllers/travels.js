import { Travel } from "../models/travel.js"

function index(req,res){
Travel.find({})
.then(travels => {
  res.render('travles/index',{
    travels,
    title: 'travels',
  })
})
.catch(err => {
  console.log(err)
  res.redirect("/travels")
})
}

export{
  index
}