const mongoose = require('mongoose')
const { Schema } = mongoose

 const uploadSchema = Schema(
  {
    photo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports=mongoose.model('upload',uploadSchema)