let apiUrl
const apiUrls = {
  production: 'https://event-book-log.herokuapp.com/ ',
  development: 'http://localhost:8080'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl