
import axios from 'axios'
import md5 from 'md5'
const rootPath = 'http://192.168.1.188:8065'
const pubParameter = {
  token: md5('ZJH_CRM_API'),
  authType: 'acl',
  parseType: 'api',
  terminalType: 'pc',
  roleType: 'plat'
}
export default function ajax(url = '', userParameter = {}) {
  url = rootPath + url
  let data = Object.assign({ ...pubParameter }, { ...userParameter })
  data = toQueryString(data)

  return new Promise((resolve, reject) => {
    let promise = axios.post(url, data)
    promise.then(response => {
      resolve(response.data)
    }).catch(errMsg => {
      reject(errMsg)
    })
  })
}

const toQueryString = function (obj) {
  return obj ? Object.keys(obj).sort().map(function (key) {
    const val = obj[key];
    if (Array.isArray(val)) {
      return val.sort().map(function (val2) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
      }).join('&');
    }
    return encodeURIComponent(key) + '=' + encodeURIComponent(val);
  }).join('&') : '';
}
