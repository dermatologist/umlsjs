import mockAxios from "axios";
import { getService } from '../src/service/generalService'

jest.mock('axios') 

it('Get Results for General service', async () => {
  // setup

    const fakeTgt = `
    <!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
    <html>
    <head>
    <title>201 The request has been fulfilled and resulted in a new resource being created</title></head>
    <body><h1>TGT Created</h1>
    <form action="https://utslogin.nlm.nih.gov/cas/v1/tickets/TGT-36471-aYqNLN2rFIJPXKzxwdTNC5ZT7z3B3cTAKfSc5ndHQcUxeaDOLN-cas" method="POST">Service:<input type="text" name="service" value="">
    <br><input type="submit" value="Submit"></form>
    </body>
    </html>
    `

    const fakeSt = 'ST-134-HUbXGfI765aSj0UqtdvU-cas'

    const fakeRequest = {
      method: 'get',
      url: 'https://uts-ws.nlm.nih.gov/rest/search/current',
      params: {
        string: 'fracture of carpal bone',
        ticket: 'ST-134-HUbXGfI765aSj0UqtdvU-cas'
      }
    }

    const fakeSearch = {

      "pageSize": 25,
      "pageNumber": 1,
      "result": 
  
  {
  
      "classType": "searchResults",
      "results": 
  
  [
  
  {
  
      "ui": "C0009044",
      "rootSource": "SNOMEDCT_US",
      "uri": "https://uts-ws.nlm.nih.gov/rest/content/2015AA/CUI/C0009044",
      "name": "Closed fracture carpal bone"
  
  },
  {
  
      "ui": "C0016644",
      "rootSource": "MTH",
      "uri": "https://uts-ws.nlm.nih.gov/rest/content/2015AA/CUI/C0016644",
      "name": "Fracture of carpal bone"
  
  },
  {
  
      "ui": "C0159765",
      "rootSource": "MTH",
      "uri": "https://uts-ws.nlm.nih.gov/rest/content/2015AA/CUI/C0159765",
      "name": "Open fracture of carpal bone, unspecified"
  
  }]
      }
  
  }


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
    // mockAxios.get.mockImplementation((url, params) => {
  //   console.log(url, params)
  //   switch (url) {
  //     case 'https://uts-ws.nlm.nih.gov/rest/search/current':
  //       return Promise.resolve({data: fakeSearch})
  //     case '/items.json':
  //       return Promise.resolve({data: [{id: 1}, {id: 2}]})
  //     default:
  //       return Promise.reject(new Error('not found'))
  //   }
  // });

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
  expect(mockAxios).toHaveBeenCalledWith(fakeRequest)
});