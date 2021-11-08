import mongoose from 'mongoose'

const Schema = mongoose.Schema

const travelSchema = new Schema({
  title: String,
  rating:Number,
  cost: Number,
  worththetrip:Boolean,
  location:String,
  author: {
    id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
    },
    name: String,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review"
    }
  ]
  // reviews: [reviewSchema,
})

const Travel = mongoose.model('travel', travelSchema)

export {
  Travel,
}