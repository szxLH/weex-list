const stream = weex.requireModule('stream')
const baseURL = 'https://hacker-news.firebaseio.com/v0'

export function fetchGet (path) {
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: 'GET',
      url: `${baseURL}/${path}`,
      type: 'json'
    }, (response) => {
      if (response.status == 200) {
        resolve(response.data)
      }
      else {
        reject(response)
      }
    }, () => {})
  })
}

export function fetchPost (path) {
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: 'POST',
      url: `${baseURL}/${path}`,
      type: 'json'
    }, (response) => {
      if (response.status == 200) {
        resolve(response.data)
      }
      else {
        reject(response)
      }
    }, () => {})
  })
}

export function testPromise () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve({code: 1})
    }, 1000)
  })
}