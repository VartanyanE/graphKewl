const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    compliment: {
        type: Schema.Types.ObjectId,
        ref: 'Compliment'
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},
    { timestamps: true })

module.exports = mongoose.model('Booking', bookingSchema);