const express = require('express');
const v1Router = express.Router();
const Sensordata = require('../../models/sensordataModel');

v1Router.post('/add', async (req, res) => {
    const { temperature, humidity, feels_like, wind_speed, wind_direction } = req.body;
    if (!temperature || !humidity || !wind_speed || !wind_direction) {
        return res.status(400);
    }
    if (temperature < 0 || temperature > 50 || humidity < 0 || humidity > 100 || wind_speed < 0 || wind_speed > 100 || wind_direction < 0 || wind_direction > 360 || feels_like < 0 || feels_like > 50) {
        return res.status(400).send('Invalid input');
    }
    try {
        const sensordata = await Sensordata.create({
            temperature,
            humidity,
            feels_like,
            wind_speed,
            wind_direction
        });
        res.json(sensordata);
    } catch (err) {
        res.status(500).send(err)
    }
})

v1Router.get('/all', async (req, res) => {
    try {
        const sensordata = await Sensordata.find();
        res.json(sensordata);
    } catch (err) {
        res.send(err);
    }
}
)

v1Router.get('/latest', async (req, res) => {
    try {
        const sensordata = await Sensordata.findOne().sort({ createdAt: -1 });
        res.json(sensordata);
    } catch (err) {
        res.send(err);
    }
}
)


module.exports = v1Router;