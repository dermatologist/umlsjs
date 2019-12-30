import axios from 'axios';
import querystring from 'querystring';
import regeneratorRuntime from "regenerator-runtime";


export const getTgt = async apikey => {
    
    const config = {
      baseURL: "https://utslogin.nlm.nih.gov/cas/v1/",
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    const requestBody = {
      apikey: apikey
    }
    const response = await axios.post('api-key', querystring.stringify(requestBody), config)
    return response.data
  };

