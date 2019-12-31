import { getTgt, getSt } from '../src/service/authService'
import API_KEY from './api'

test('Get TGT with API-key', async () => {

    const tgt = await getTgt(API_KEY);
    expect(tgt.substring(0,3)).toBe('TGT')
})

test('Get ST with API-key', async () => {

    const st = await getSt(API_KEY);
    expect(st.substring(0,2)).toBe('ST')
})