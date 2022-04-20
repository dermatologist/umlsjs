import axios from 'axios';

/**
 *
 * @param {string} ticket the TGT ticket to be used for the request
 * @param {string} url url in the form /search/current
 * @param {object} params in the form {string: 'psoriasis vulgaris'}
 */
export const getService = async (ticket, url, params:any ={}) => {
  const fullUrl = "https://uts-ws.nlm.nih.gov/rest" + url
  params.ticket = ticket
  const response = await axios.get(fullUrl, {params: params})
  return(response.data)
}
