import axios from 'axios';
import querystring from 'querystring';
import regeneratorRuntime from "regenerator-runtime";
import parser from 'fast-xml-parser'
import he from 'he'
import { getSt } from './authService'
/*
INPUTS:
apiKey from UMLS
url in the form /search/current
params in the form {string: 'psoriasis vulgaris'}
*/
export const getService = async (apikey, url, params={}) => {
  const ticket = await getSt(apikey)
  const fullUrl = "https://uts-ws.nlm.nih.gov/rest" + url
  params.ticket = ticket
  const config = {
    method: 'get',
    url: fullUrl,
    params: params
  }
  // console.log(config)
  const response = await axios(config)
  return(response.data)
}