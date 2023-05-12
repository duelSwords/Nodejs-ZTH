// Model handle all the data and transformation logic

// Map is more flexible than js objects, key and value can be any
const launches = new Map()

let latestFlightNumber = 100

//Hard coded example
const launch = {
    mission: 'Mission name 100',
    rocket: 'Rocket name 100',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-1652 b',
    flightNumber : 100,
    customers: ['ABC', 'NASA'],
    upcoming: true,
    success: true,
}
launches.set(launch.flightNumber, launch)

function existsLaunchWithId(launchId) {
    return launches.has(launchId)
}

function getAllLaunches() {
    return Array.from(launches.values())
}

function addNewLaunch(launch){
    latestFlightNumber++
    launches.set(
        latestFlightNumber,
        Object.assign(launch, {
            //have it be server side rather than getting from client side, reduce client from sending unnecessary data
            flightNumber: latestFlightNumber,
            customers: ['ZTM', 'NASA'],
            upcoming: true,
            success: true,
        })
    )
}

function abortLaunchById(launchId) {
    const aborted = launches.get(launchId)
    aborted.upcoming = false
    aborted.success = false
    return aborted
}

module.exports = {
    existsLaunchWithId,
    getAllLaunches,
    addNewLaunch,
    abortLaunchById
}