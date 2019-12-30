import axios from 'axios';


export default class authService {



  static getTgt(apikey){
    const umlsServer = axios.create({
      baseURL: "https://utslogin.nlm.nih.gov/cas/v1/",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const data = {
      apikey: apikey
    }
    return umlsServer.post('api-key', data);
  }

}