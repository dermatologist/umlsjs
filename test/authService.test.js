import { getTgt } from '../src/service/authService'
import API_KEY from './api'

test('Get TGT with API-key', async () => {

    const tgt = await getTgt(API_KEY);
    console.log( tgt );
})