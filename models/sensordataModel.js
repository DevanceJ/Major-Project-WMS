const mongoose = require('mongoose');

const sensordataSchema = new mongoose.Schema({
    temperature: {
        type: Number,
        required: true,
    },
    humidity: {
        type: Number,
        required: true,
    },
    feels_like: {
        type: Number,
        required: true,
    },
    wind_speed: {
        type: Number,
        required: true,
    },
    wind_direction: {
        type: Number,
        required: true,
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Sensordata', sensordataSchema);
