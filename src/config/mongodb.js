import { MongoClient } from 'mongodb'
import {env} from '*/config/enviroment'

let dbInstance = null

export const connectDB = async () => {
    const client = new MongoClient(env.MONGODB_URI, { 
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    // connect the clinet to the server
    await client.connect()

//     //assign clientDB to our db instance
        dbInstance = client.db(env.DATABASE_NAME)
}

// //Get Database Instance
export const getDB = () => {
    if (!dbInstance) throw new Error ('Must connect to the database first.')
   return dbInstance
}

