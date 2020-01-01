import UMLSSearch from '../src/function/umlsSearch'
import API_KEY from './api'

test('Get Results for a term', async () => {
    const search1 = new UMLSSearch(API_KEY, 'Erythema Multiforme')
    await search1.query()
    const results = search1.getResults()
    expect(results.length).toBeGreaterThan(1)
})

test('Get Results for exact term', async () => {
    const search1 = new UMLSSearch(API_KEY, 'fjhfsdfjlkdhgfjhb', true)
    await search1.query()
    const results = search1.getResults()
    expect(results.length).toBeLessThan(2)
})