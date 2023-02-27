const { launches } = require('../../models/launches.model');

function getAllLaunches(req, res) {
    // console.log(launches)
    // The key is flightnumber and the value is the object {}
    const launchesValuesArray = Array.from(launches.values())
    // console.log(launchesValuesArray) // [ {}, {}, {}, {} ]

    return res.status(200).json(launchesValuesArray)
}

module.exports = {
    getAllLaunches
}