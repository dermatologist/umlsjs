import authService from '../src/service/authService'
import API_KEY from './api'
test('Get TGT with API-key', () => {
    authService.getTgt(API_KEY).then(function(value) {
        console.log(value);
        // expected output: "Success!"
      })
      .catch(function(error) {
        // console.log(error);
        // expected output: "Success!"
      });
    // expect(authService.getTgt(1)).toBe(2)
  })