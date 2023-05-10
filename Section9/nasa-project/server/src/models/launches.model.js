// Model handle all the data and transformation logic

// Map is more flexible than js objects, key and value can be any
const launches = new Map()

const launch = {
    flightNumber : 100,
    mission: 'Mission name 100',
    rocket: 'Rocket name 100',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-1652 b',
    customers: ['ABC', 'NASA'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch)

function getAllLaunches() {
    return Array.from(launches.values())
}

module.exports = {
    getAllLaunches,
}