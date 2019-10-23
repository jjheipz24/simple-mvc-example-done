const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let DogModel = {};

const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    breed: {
        type: String,
        required: true,
        trim: true,

    },
    age: {
        type: Number,
        min: 0,
        required: true,
    },
    createdDate: {
        type: Number,
        default: Date.now
    },
});

DogSchema.statics.findByName = (name, callback) => {
    const search = {
        name,
    };

    return DogModel.findOne(search, callback);
}
