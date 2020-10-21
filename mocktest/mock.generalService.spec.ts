import axios from "axios";
import { getService } from '../src/service/generalService'
import {fakeTgt, fakeSt} from './fake-key-response'
import { fakeSearch } from './fake-search-response'
jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>;

it('Get Results for General service', async () => {
  mockAxios.post.mockImplementation((url) => {
    switch (url) {
      case 'api-key':
        return Promise.resolve({data: fakeTgt})
      default: // Request for ST
        return Promise.resolve({data: fakeSt})
    }
  });

  mockAxios.get.mockImplementation((request:string) => {
    switch (request) {
        case 'https://uts-ws.nlm.nih.gov/rest/search/current':
          return Promise.resolve({data: fakeSearch})
        default:
        return Promise.resolve({data: {}})
    }
  });

  const params = {
    string: 'fracture of carpal bone'
  }
  const data = await getService("test-key-random", '/search/current', params);

  expect(data.pageNumber).toBe(1)
  expect(data.result.classType).toBe('searchResults')
  expect(mockAxios.post).toHaveBeenCalledTimes(2)
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith("https://uts-ws.nlm.nih.gov/rest/search/current",
  { "params": { "string": "fracture of carpal bone", "ticket": "ST-134-HUbXGfI765aSj0UqtdvU-cas" } })
});