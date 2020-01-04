import { UMLSSearch, CUISearch } from '../src/index'
import API_KEY from './api'

test('Get Results for a term in index', async () => {
    const search1 = new UMLSSearch(API_KEY)
    search1.init('Erythema Multiforme')
    await search1.query()
    const results = search1.getResults()
    expect(results.length).toBeGreaterThan(1)
})

test('Get Results for a CUI in index', async () => {
    const search1 = new CUISearch(API_KEY)
    search1.init('C0009044')
    await search1.query()
    const result = search1.getResult()
    expect(search1.pageCount).toBeGreaterThan(0)
})