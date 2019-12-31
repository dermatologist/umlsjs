import { getService } from '../src/service/generalService'
import API_KEY from './api'

test('Get Results for General service', async () => {

    const params = {
        string: 'psoriasis vulgaris'
    }
    const data = await getService(API_KEY, '/search/current', params);
    // console.log(data.result.results);
    expect(data.pageNumber).toBe(1)
})

// test('Get ST with API-key', async () => {

//     const st = await getSt(API_KEY);
//     expect(st.substring(0,2)).toBe('ST')
// })