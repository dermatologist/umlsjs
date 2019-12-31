import { Search } from '../src/index'
import API_KEY from './api'

test('Get Results for a term in index', async () => {
    const search1 = new Search(API_KEY, 'Erythema Multiforme')
    await search1.search()
    const results = search1.getResults()
    expect(results.length).toBeGreaterThan(1)
})
