import mongoose from 'mongoose'

const Schema = mongoose.Schema

const travelSchema = new Schema({
  title: String,
  rating:Number,
  cost: Number,
  worththetrip:Boolean,
  location:String,
  // reviews: [reviewSchema,
})

const travel = mongoose.model('travel', travelSchema)

export {
  travel,
}