import umlsjs from '../src/index'
import dotenv from 'dotenv'

beforeAll(() => {
  dotenv.config()
});

test('Get Results for a term in index', async () => {
  const search1 = new umlsjs.UMLSSearch(process.env.UMLS_API_KEY)
    search1.init('Erythema Multiforme')
    await search1.query()
    const results = search1.getResults()
    expect(results.length).toBeGreaterThan(1)
})

test('Get Results for a CUI in index', async () => {
  const search1 = new UMLSJS.CUISearch(process.env.UMLS_API_KEY)
    search1.init('C0009044')
    await search1.query()
    search1.getResult()
    expect(search1.pageCount).toBeGreaterThan(0)
})
