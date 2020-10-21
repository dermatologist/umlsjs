import { getTgt, getSt } from '../src/service/authService'
import dotenv from 'dotenv'

beforeAll(() => {
  dotenv.config()
});

test('Get TGT with API-key', async () => {

    const tgt = await getTgt(process.env.UMLS_API_KEY);
    expect(tgt.substring(0,3)).toBe('TGT')
})

test('Get ST with API-key', async () => {

    const st = await getSt(process.env.UMLS_API_KEY);
    expect(st.substring(0,2)).toBe('ST')
})