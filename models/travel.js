import mongoose from 'mongoose'

const Schema = mongoose.Schema

const travelSchema = new Schema({
  title: String,
  rating:Number,
  cost: Number,
  worththetrip:Boolean,
  location:String,
  creator: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    name: String
  }
  // reviews: [reviewSchema,
})

const Travel = mongoose.model('travel', travelSchema)

export {
  Travel,
}