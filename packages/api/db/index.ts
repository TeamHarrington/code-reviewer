import { config } from '..'
import Mongoose, { ConnectionOptions } from 'mongoose'

export const startConnection = async (options?: ConnectionOptions) => {
  const opt: ConnectionOptions = options ?? {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  return Mongoose.connect(config.MONGO_SERVER, opt)
}
