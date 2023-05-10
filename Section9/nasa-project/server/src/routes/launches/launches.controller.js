//Controller handles all the request and response

const { getAllLaunches, addNewLaunch } = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    // console.log(launches)
    // The key is flightnumber and the value is the object {}
    // const launchesValuesArray = Array.from(launches.values())
    // console.log(launchesValuesArray) // [ {}, {}, {}, {} ]
    // return res.status(200).json(launchesValuesArray)

    return res.status(200).json(getAllLaunches())
}

function httpAddNewLaunch(req, res) {
    const launch = req.body

    if(!launch.mission | !launch.rocket || !launch.launchDate || !launch.destionation) {
        //Bad Request Client error 
        return res.status(400).json({
            error: 'Missing required launch property'
        }) 
    }

    launch.launchDate = new Date(launch.launchDate)
    // if(launch.launchDate.toString() === 'Invalid Date') {
    if(isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid launch date'
        })
    }

    addNewLaunch(launch)
    //Best practice when data is submitted, give a response that data has been processed
    // 201 is created
    return res.status(201).json(launch) 
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch
}