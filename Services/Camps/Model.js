import mongoose, { Schema } from 'mongoose'

const CampsSchema = new Schema({
    location: {
        type: Object,
        required: true
        // Lat
        // Long
    }
}, {
    timestamps: true
})

export const CampModel = mongoose.model('camps', CampsSchema)