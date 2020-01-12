import mockAxios from "axios";
import { getService } from '../src/service/generalService'

it("fetches data from unsplash", async () => {
  // setup
//   mockAxios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: { results: ["cat.jpg"] }
//     })
//   );
//   mockAxios.post.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: { results: ["cat.jpg"] }
//     })
//   );

  mockAxios.get.mockImplementation((url) => {
    switch (url) {
      case '/users.json':
        return Promise.resolve({data: [{name: 'Bob', items: []}]})
      case '/items.json':
        return Promise.resolve({data: [{id: 1}, {id: 2}]})
      default:
        return Promise.reject(new Error('not found'))
    }
  });
  mockAxios.post.mockImplementation((url) => {
    switch (url) {
      case '/users.json':
        return Promise.resolve({data: [{name: 'Bob', items: []}]})
      case '/items.json':
        return Promise.resolve({data: [{id: 1}, {id: 2}]})
      default:
        return Promise.reject(new Error('not found'))
    }
  });

  // work
  const params = {
    string: 'psoriasis vulgaris'
  }
  const data = await getService("test-key-random", '/search/current', params);

  // expect
  expect(images).toEqual(["cat.jpg"]);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        client_id: process.env.REACT_APP_UNSPLASH_TOKEN,
        query: "cats"
      }
    }
  );
});