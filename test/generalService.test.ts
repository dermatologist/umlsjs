import { getService } from '../src/service/generalService'
import dotenv from 'dotenv'
import UMLSToken from '../src/model/umlsToken'

beforeAll(() => {
  dotenv.config()
});

test('Get Results for General service', async () => {
    const key = process.env.UMLS_API_KEY || "";
    const ticket = new UMLSToken(key)
    const st = await ticket.getSt()
    const params = {
        string: 'psoriasis vulgaris'
    }
    const data = await getService(st, '/search/current', params);
    expect(data.pageNumber).toBe(1)
})

// test('Get ST with API-key', async () => {

//     const st = await getSt(API_KEY);
//     expect(st.substring(0,2)).toBe('ST')
// })