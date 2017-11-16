import mongoose, { Schema } from 'mongoose'

const DistributionSchema = new Schema({
    // Needs Schema Properties
    rescur: {
        type: Object,
        required: true
        //  Name
        //  Title
    },
    location: {
        type: Object,
        required: true
        // Lat
        // Long
    },
    goods: {
        type: String,
        required: true
        // String    
    }
}, {
    timestamps: true
})

export const DisModel = mongoose.model('distribution', DistributionSchema)