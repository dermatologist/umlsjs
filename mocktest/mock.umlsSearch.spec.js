import mockAxios from "axios";
import UMLSSearch from '../src/function/umlsSearch'
import { fakeTgt, fakeSt } from './fake-key-response'
import { fakeSearch } from './fake-search-response'
jest.mock('axios')

mockAxios.post.mockImplementation((url) => {
    switch (url) {
        case 'api-key':
            return Promise.resolve({ data: fakeTgt })
        default: // Request for ST
            return Promise.resolve({ data: fakeSt })
    }
});

/*
  @IMPORTANT:
    UMLS API works only with direct axios(config) calls for get (Why?)
    Hence the tests have to be altered as below
*/

mockAxios.mockImplementation((request) => {
    switch (request.url) {
        case 'https://uts-ws.nlm.nih.gov/rest/search/current':
            if (request['params']['string'] === 'fracture of carpal bone')
                return Promise.resolve({ data: fakeSearch })
            else
                return Promise.resolve({ data: {} })
        default:
            return Promise.resolve({ data: {} })
    }
});
test('Get Results for General service', async () => {
    const search1 = new UMLSSearch(process.env.UMLS_API_KEY || "test-random-key")
    search1.init('fracture of carpal bone')
    await search1.query()
    const results = search1.getResults()
    expect(results[0]['name']).toBe('Closed fracture carpal bone')
    expect(results.length).toBeGreaterThan(1)
    expect(search1.pageNumber).toBe(1)

});
