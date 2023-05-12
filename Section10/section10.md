# Section 10 Testing API

1. end to end test
2. api test (intergation test)
3. unit test (ex. test a single function in isolation)

## Testing in Node
- test runner
- test fixtures
- assertions
- mocking

## Jest Testing framework
[JEST Homepage](https://jestjs.io/docs/getting-started)

package script `"test": "jest"`
when running `npm test` it will look at 
```
testMatch:
**/__tests__/**/*.[jt]s?(x), 
**/?(*.)+(spec|test).[tj]s?(x) 
```
When adding `--watch` flag to jest it will watch for test changes
`"test": "jest --watch"`