import { Schema, model } from "mongoose"
import paginate from "mongoose-paginate-v2"

import { MONGOOSE_DB_COLLECTION_PRODUCTS } from "../../config/config.js"

const productSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		default: null
	},
	code: {
		type: String,
		required: true,
		unique: true
	},
	price: {
		type: Number,
		required: true
	},
	status: {
		type: Boolean,
		default: true
	},
	stock: {
		type: Number,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	thumbnails: {
		type: [String],
		default: []
	}
})

productSchema.plugin(paginate)

export const productModel = model(MONGOOSE_DB_COLLECTION_PRODUCTS, productSchema)