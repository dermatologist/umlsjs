import UMLSSearch from '../src/function/umlsSearch'
import API_KEY from './api'

test('Get Results for a term', async () => {
    const search1 = new UMLSSearch(API_KEY)
    search1.init('Erythema Multiforme')
    await search1.query()
    const results = search1.getResults()
    expect(results.length).toBeGreaterThan(1)
})

test('Get Results for a two terms', async () => {
    const search1 = new UMLSSearch(API_KEY)
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
    const search1 = new UMLSSearch(API_KEY)
    search1.init('fjhfsdfjlkdhgfjhb', true)
    await search1.query()
    const results = search1.getResults()
    expect(results.length).toBeLessThan(2)
})