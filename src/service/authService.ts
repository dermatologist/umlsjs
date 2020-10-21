import axios from 'axios';
import querystring from 'querystring';
// This is required
//import regeneratorRuntime from "regenerator-runtime";
import parser from 'fast-xml-parser'
import he from 'he'

export const getSt = async apikey => {
  const tgt = await getTgt(apikey)
  const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
  }
  const url = `https://utslogin.nlm.nih.gov/cas/v1/tickets/${tgt}`
  const response = await axios.post(url, 'service=http%3A%2F%2Fumlsks.nlm.nih.gov', config)
  return response.data
}

export const getTgt = async apikey => {
  if(getTgtFromCache())
    return getTgtFromCache()
  else{
    const options = {
      attributeNamePrefix : "U_",
      attrNodeName: "attr", //default is 'false'
      textNodeName : "#text",
      ignoreAttributes : false,
      ignoreNameSpace : false,
      allowBooleanAttributes : false,
      parseNodeValue : true,
      parseAttributeValue : true,
      trimValues: true,
      cdataTagName: "__cdata", //default is 'false'
      cdataPositionChar: "\\c",
      localeRange: "", //To support non english character in tag/attribute values.
      parseTrueNumberOnly: false,
      arrayMode: false, //"strict"
      attrValueProcessor: (val) => he.decode(val, {isAttributeValue: true}),//default is a=>a
      tagValueProcessor : (val) => he.decode(val), //default is a=>a
      stopNodes: ["parse-me-as-string"]
      };
      const config = {
        baseURL: "https://utslogin.nlm.nih.gov/cas/v1/",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
      }
      const requestBody = {
        apikey: apikey
      }
      const apiFunction = 'api-key'
      const response = await axios.post(apiFunction, querystring.stringify(requestBody), config)
      const jsonObj = parser.parse(response.data, options)
      const urlWithTgt = jsonObj.html.body.form.attr.U_action
      const url = config.baseURL+apiFunction+'/'
      const tgt = urlWithTgt.replace(url, '')
      saveTgt(tgt)
      return(tgt)
    }
  };


  const saveTgt = tgt => {
    const currentTime = new Date().getTime().toString();
    localStorage.setItem("tgt_time", currentTime);
    localStorage.setItem("tgt_value", tgt);

  }

  const getTgtFromCache = () => {
    const expirationDuration = 1000 * 60 * 60 * 8; // 8 hours
    const prevSaved  = parseInt(localStorage.getItem("tgt_time") || '0');
    const currentTime = new Date().getTime();

    const prevSavedExpired = prevSaved !== undefined && currentTime - prevSaved > expirationDuration;

    if (prevSaved || !prevSavedExpired) {
      return localStorage.getItem("tgt_value");
    }
    return null
  }
