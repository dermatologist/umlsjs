import axios from 'axios';
// This is required
//import regeneratorRuntime from "regenerator-runtime";
import { getSt } from './authService'
/*
INPUTS:
apiKey from UMLS
url in the form /search/current
params in the form {string: 'psoriasis vulgaris'}
*/
export const getService = async (apikey, url, params:any ={}) => {
  const ticket = await getSt(apikey)
  const fullUrl = "https://uts-ws.nlm.nih.gov/rest" + url
  params.ticket = ticket
  // const config:any = {
  //   method: 'get',
  //   url: fullUrl,
  //   params: params
  // }
  /*
  Only the first option works with UMLS. (Why?)
  As a result, the mockaxios in the mock tests is different.
  @See example in mock.generalService.spec.js
  */
  //const response = await axios(config)
  const response = await axios.get(fullUrl, {params: params})
  return(response.data)
}
