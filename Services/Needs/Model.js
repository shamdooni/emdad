import mongoose, { Schema } from 'mongoose'

const NeedsSchema = new Schema({
    // Needs Schema Properties
    test: String
}, {
    timestamps: true
})

export const NeedsModel = mongoose.model('Needs', NeedsSchema)