import { getService } from '../src/service/generalService'
import dotenv from 'dotenv'

beforeAll(() => {
  dotenv.config()
});

test('Get Results for General service', async () => {

    const params = {
        string: 'psoriasis vulgaris'
    }
    const data = await getService(process.env.UMLS_API_KEY, '/search/current', params);
    expect(data.pageNumber).toBe(1)
})

// test('Get ST with API-key', async () => {

//     const st = await getSt(API_KEY);
//     expect(st.substring(0,2)).toBe('ST')
// })