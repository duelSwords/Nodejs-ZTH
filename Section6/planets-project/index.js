const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet['koi_disposition'] === 'CONFIRMED' &&
    planet['koi_insol'] > 0.36 &&
    planet['koi_insol'] < 1.11 &&
    planet['koi_prad'] < 1.6
  );
}

fs.createReadStream('kepler_data.csv')
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
  })
  .on('end', () => {
    console.log(
      habitablePlanets.map((planet) => {
        return planet['kepler_name'];
      })
    );
    console.log(`We found ${habitablePlanets.length} habitable planets`);
    console.log('Done!!!');
  });

// parse()
