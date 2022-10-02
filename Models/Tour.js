const mongoose = require('mongoose');

const TourSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true,"Please Provide a name for this Tour"],
        trim: true,
        unique: true,
        minLength:[3,"Name must be a least 3 characters"],
        maxLength:[100,"Name is too large"]

    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:{
            values:['in-stock','out-of-stock','discontinued'],
            message:"status can not be {VALUE}"
        }
    },
    
},{timestamps:true})
// Schema ->Model ->Query

// make model 
const Tour = mongoose.model('Tour', TourSchema);
module.exports = Tour;