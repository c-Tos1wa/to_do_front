const url = 'https://backend-dolist.herokuapp.com'

const ApiRequest = {
  getAll: () => fetch(url),
  getById: (id) => fetch(`${url}/${id}`),
  post: (data) => {
    return fetch(`${url}/submit`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
  },
  put: (data, id) => {
    return fetch(`${url}/edit/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
  },
  delete: (id) => {
    return fetch(`${url}/delete/${id}`, {
      method: 'DELETE'
    })
  }


}

export default ApiRequest