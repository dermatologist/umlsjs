import { UMLSSearch, CUISearch } from '../src/index'
import dotenv from 'dotenv'

beforeAll(() => {
  dotenv.config()
});

test('Get Results for a term in index', async () => {
    const search1 = new UMLSSearch(process.env.UMLS_API_KEY)
    search1.init('Erythema Multiforme')
    await search1.query()
    const results = search1.getResults()
    expect(results.length).toBeGreaterThan(1)
})

test('Get Results for a CUI in index', async () => {
    const search1 = new CUISearch(process.env.UMLS_API_KEY)
    search1.init('C0009044')
    await search1.query()
    const result = search1.getResult()
    expect(search1.pageCount).toBeGreaterThan(0)
})