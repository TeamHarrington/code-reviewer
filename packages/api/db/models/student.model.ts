import Mongoose from 'mongoose'

const studentSchema = new Mongoose.Schema({
  name: String
})

const Student = Mongoose.model('Sample', studentSchema)

export { Student }
