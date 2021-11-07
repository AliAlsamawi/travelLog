import mongoose from "mongoose"

const Schema = mongoose.Schema;

const ReviewScehma = new Schema({
  review: String,
  author: {
    id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    name: String,
  },
})

const Review = mongoose.model("Review", ReviewScehma)

export { 
  Review
}
