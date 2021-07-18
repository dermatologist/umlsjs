import UMLSSearch from '../src/function/umlsSearch'
import dotenv from 'dotenv'
import UMLSToken from '../src/model/umlsToken'

beforeAll(() => {
  dotenv.config()
});


test('Get Results for a term', async () => {
    const key = process.env.UMLS_API_KEY || "";
    const ticket = new UMLSToken(key)
    const st = await ticket.getSt()
    const search1 = new UMLSSearch(st)
    search1.init('Erythema Multiforme')
    await search1.query()
    const results = search1.getResults()
    expect(results.length).toBeGreaterThan(1)
    expect(search1.pageNumber).toBe(1)
})

test('Get Next page for a term', async () => {
    const key = process.env.UMLS_API_KEY || "";
    const ticket = new UMLSToken(key)
    const st = await ticket.getSt()
    const search1 = new UMLSSearch(st)
    search1.init('Renal failure')
    search1.nextPage()
    await search1.query()
    const results = search1.getResults()
    expect(results.length).toBeGreaterThan(1)
    expect(search1.pageNumber).toBe(2)
})

test('Get Results for a two terms', async () => {
    const search1 = new UMLSSearch(process.env.UMLS_API_KEY)
    search1.init('Erythema Multiforme')
    await search1.query()
    const results1 = search1.getResults()
    search1.init('Psoriasis Vulgaris')
    await search1.query()
    const results2 = search1.getResults()
    // Both have to be different
    // Ref: https://jestjs.io/docs/en/expect#expectnotarraycontainingarray
    expect(results1).toEqual(
        expect.not.arrayContaining(results2),
    );

})

test('Get Results for exact term', async () => {
    const search1 = new UMLSSearch(process.env.UMLS_API_KEY)
    search1.init('fjhfsdfjlkdhgfjhb')
    await search1.query()
    const results = search1.getResults()
    expect(results).toBeTruthy()
    if (results)
        expect(results.length).toBeLessThan(2)
})