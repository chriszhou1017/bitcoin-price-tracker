class requestAdaptor {
  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  get(url, callback) {
    fetch(url, { method: 'GET' })
      .then(resp => this.checkStatus(resp))
      .then(callback);
  }
}

export default requestAdaptor;
