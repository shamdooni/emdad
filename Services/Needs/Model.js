import mongoose, { Schema } from 'mongoose'

const NeedsSchema = new Schema({
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
        // Lng
    },
    needs: {
        type: String,
        required: true
        // String    
    }
}, {
    timestamps: true
})

export const NeedsModel = mongoose.model('Needs', NeedsSchema)