import UMLSSearch, { getService } from '../src/function/umlsSearch'
import API_KEY from './api'

test('Get Results for a term', async () => {
    const search1 = new UMLSSearch(API_KEY, 'Erythema Multiforme')
    const results = await search1.getResults()
    expect(results.length).toBeGreaterThan(1)
})

test('Get Results for exact term', async () => {
    const search1 = new UMLSSearch(API_KEY, 'fjhfsdfjlkdhgfjhb', true)
    const results = await search1.getResults()
    expect(results.length).toBeLessThan(2)
})