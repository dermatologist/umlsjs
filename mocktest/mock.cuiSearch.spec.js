import mockAxios from "axios";
import CUISearch from '../src/function/cuiSearch'
import { fakeTgt, fakeSt } from './fake-key-response'
import { fakeCUIResponse, fakeCUIAtoms, fakeCUIDefinitions, fakeCUIRelations } from './fake-cui-response'
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
        case 'https://uts-ws.nlm.nih.gov/rest/content/current/CUI/C0009044':
            return Promise.resolve({ data: fakeCUIResponse })
        case 'https://uts-ws.nlm.nih.gov/rest/content/current/CUI/C0009044/atoms':
            return Promise.resolve({ data: fakeCUIAtoms })
        case 'https://uts-ws.nlm.nih.gov/rest/content/current/CUI/C0009044/definitions':
            return Promise.resolve({ data: fakeCUIDefinitions })
        case 'https://uts-ws.nlm.nih.gov/rest/content/current/CUI/C0009044/relations':
            return Promise.resolve({ data: fakeCUIRelations })
        default:
            console.log(request)
            return Promise.resolve({ data: {} })
    }
});
test('Get Results for a CUI', async () => {
    const search1 = new CUISearch(process.env.UMLS_API_KEY || "test-random-key")
    const CUI = 'C0009044'
    search1.init(CUI)
    await search1.query()
    const resp = search1.getResult()
    expect(resp['results'][0]['ui']).toBe(CUI)
    expect(search1.pageCount).toBeGreaterThan(0)
})

test('Get Atoms for a CUI', async () => {
    const search1 = new CUISearch(process.env.UMLS_API_KEY)
    const CUI = 'C0009044'
    search1.init(CUI)
    await search1.getAtoms()
    const result = search1.atoms
    expect(result.length).toBeGreaterThan(0)
})

test('Get Definitions for a CUI', async () => {
    const search1 = new CUISearch(process.env.UMLS_API_KEY)
    const CUI = 'C0009044'
    search1.init(CUI)
    await search1.getDefinitions()
    const result = search1.definitions
    expect(result.length).toBeGreaterThan(0)
})

test('Get Relations for a CUI', async () => {
    const search1 = new CUISearch(process.env.UMLS_API_KEY)
    const CUI = 'C0009044'
    search1.init(CUI)
    await search1.getRelations()
    const result = search1.relations
    expect(result.length).toBeGreaterThan(0)
})