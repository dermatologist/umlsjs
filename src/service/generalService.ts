import axios from 'axios';
/*
INPUTS:
apiKey from UMLS
url in the form /search/current
params in the form {string: 'psoriasis vulgaris'}
*/
export const getService = async (ticket, url, params:any ={}) => {
  const fullUrl = "https://uts-ws.nlm.nih.gov/rest" + url
  params.ticket = ticket
  const response = await axios.get(fullUrl, {params: params})
  return(response.data)
}
