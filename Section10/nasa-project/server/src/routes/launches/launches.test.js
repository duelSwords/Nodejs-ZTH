const request = require('supertest')
const app = require('../../app')

describe('Test GET /launches', () => {
    test('It should respone with 200 success', async () => {
        //Using supertest chain assertion 
        const response = await request(app)
            .get('/launches')
            .expect('Content-Type', /json/)
            .expect(200)
        // expect(response.status).toBe(200)
    })
})

describe('Test POST /launch', () => {
    const completeLaunchData = {
        mission: 'Ussa mission',
        rocket: 'Rocket-1',
        target: 'Kepler-186 f',
        launchDate: 'January 8, 2032'
    }

    const launchDataWithoutDate = {
        mission: 'Ussa mission',
        rocket: 'Rocket-1',
        target: 'Kepler-186 f',
    }

    const launchDataWithInvalidDate = {
        mission: 'Ussa mission',
        rocket: 'Rocket-1',
        target: 'Kepler-186 f',
        launchDate: 'zoom'
    }

    test('It should respond with 201 success', async () => {
        const response = await request(app)
            .post('/launches')
            .send(completeLaunchData)
            .expect('Content-Type', /json/)
            .expect(201)

        const requestDate = new Date(completeLaunchData.launchDate).valueOf()
        const responseDate = new Date(response.body.launchDate).valueOf()

        //Jest assertion 
        expect(requestDate).toBe(responseDate)
        expect(response.body).toMatchObject(launchDataWithoutDate)    
    })

    test('It should catch missing required properties', async () => {
        const response = await request(app)
            .post('/launches')
            .send(launchDataWithoutDate)
            .expect('Content-Type', /json/)
            .expect(400)

        expect(response.body).toStrictEqual({ 
             error: 'Missing required launch property'
        })
    })

    test('It should catch invalid dates', async () => {
        const response = await request(app)
        .post('/launches')
        .send(launchDataWithInvalidDate)
        .expect('Content-Type', /json/)
        .expect(400)

        expect(response.body).toStrictEqual({ 
            error: 'Invalid launch date'
        })
    })
})