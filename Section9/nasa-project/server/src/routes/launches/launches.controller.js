//Controller handles all the request and response

const { getAllLaunches } = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    // console.log(launches)
    // The key is flightnumber and the value is the object {}
    // const launchesValuesArray = Array.from(launches.values())
    // console.log(launchesValuesArray) // [ {}, {}, {}, {} ]
    // return res.status(200).json(launchesValuesArray)

    return res.status(200).json(getAllLaunches())
}

module.exports = {
    httpGetAllLaunches
}