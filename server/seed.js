import mongoose from 'mongoose'
import dotenv from 'dotenv'

import Products from './models/productModel.js'

import { sampleProducts } from './testData/testData.js'

dotenv.config()

const pushProducts = async () => {

    try {

        await mongoose.connect(process.env.MONGO_URI)
        await Products.insertMany(sampleProducts)


    } catch (error) {

    } finally {

        mongoose.connection.close()

    }
}


pushProducts()
