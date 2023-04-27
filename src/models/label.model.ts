import mongoose from 'mongoose'
export interface LabelInterface {
	id: string
	name: string
	description: string
	createdAt: Date
	updatedAt: Date
}

export const labelSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		required: true,
	},
	updatedAt: {
		type: Date,
		required: true,
	},
})

export const Label = mongoose.model('Label', labelSchema)
