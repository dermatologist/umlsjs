import mockAxios from "axios";
import { getService } from '../src/service/generalService'
import {fakeTgt, fakeSt} from './fake-key-response'
import { fakeSearch, fakeSearchRequest} from './fake-search-response'
jest.mock('axios') 

it('Get Results for General service', async () => {
  mockAxios.post.mockImplementation((url) => {
    switch (url) {
      case 'api-key':
        return Promise.resolve({data: fakeTgt})
      default: // Request for ST
        return Promise.resolve({data: fakeSt})
    }
  });

  /*
    @IMPORTANT:
      UMLS API works only with direct axios(config) calls for get (Why?)
      Hence the tests have to be altered as below
  */

  mockAxios.mockImplementation((request) => {
    switch (request.url) {
        case 'https://uts-ws.nlm.nih.gov/rest/search/current':
          return Promise.resolve({data: fakeSearch})
        default:
        return Promise.resolve({data: {}})
    }
  });

  // work
  const params = {
    string: 'fracture of carpal bone'
  }
  const data = await getService("test-key-random", '/search/current', params);

  expect(data.pageNumber).toBe(1)
  expect(data.result.classType).toBe('searchResults')
  expect(mockAxios.post).toHaveBeenCalledTimes(2)
  expect(mockAxios).toHaveBeenCalledTimes(1)
  expect(mockAxios).toHaveBeenCalledWith(fakeSearchRequest)
});