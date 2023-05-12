const fs = require('fs');
const path = require('path')
const { parse } = require('csv-parse');

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet['koi_disposition'] === 'CONFIRMED' &&
    planet['koi_insol'] > 0.36 &&
    planet['koi_insol'] < 1.11 &&
    planet['koi_prad'] < 1.6
  );
}

/*
const promise = new Promise((resolve, reject) => {resolve(42)} )
promise.then((result) => {})

const result = await promise
console.log(result)
*/

const dataPathway =  path.join(__dirname, '..', '..', 'data', 'kepler_data.csv')

//Use a promise and its callback to load data on inital load
function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(dataPathway)
      // pipe() connects a readable stream source to a stream destination
      // source is the file and destination is the parse
      .pipe(
        parse({
          comment: '#', //How are comments are represented
          columns: true, //set as key value pairs
        })
      )
      .on('data', (data) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
        }
      })
      .on('error', (err) => {
        console.log(err);
        reject(err);
      })
      .on('end', () => {
        console.log(`We found ${habitablePlanets.length} habitable planets`);
        resolve();
      });
  });
}

function getAllPlanets() {
  return habitablePlanets
}

module.exports = {
  loadPlanetsData,
  getAllPlanets,
};
