import axios from 'axios';
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
  const response = await axios.get(fullUrl, {params: params})
  return(response.data)
}
