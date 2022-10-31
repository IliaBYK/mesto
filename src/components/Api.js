export default class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkDataResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  _getResponse(url, options) {
    return fetch(url, options).then(this._checkDataResponse);
  }

  async getInitialCards() {
    return this._getResponse(this._url + '/cards', {
      headers: this._headers
    })
  }

  async getServerUserInfo() {
    return this._getResponse(this._url + '/users/me', {
      headers: this._headers
    })
  }

  async setServerUserInfo(inputs) {
    return this._getResponse(this._url + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: inputs.name,
        about: inputs.about
      })
    })
  }

  async postServerCard(inputs) {
    return this._getResponse(this._url + '/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: inputs.name,
        link: inputs.link
      })
    })
  }

  async deleteCard(cardId) {
    return this._getResponse(this._url + '/cards/' + cardId, {
      method: 'DELETE',
      headers: this._headers,
    })
  }

  async putLike(cardId) {
    return this._getResponse(this._url + '/cards/' + cardId + '/likes', {
      method: 'PUT',
      headers: this._headers,
    })
  }

  async deleteLike(cardId) {
    return this._getResponse(this._url + '/cards/' + cardId + '/likes', {
      method: 'DELETE',
      headers: this._headers,
    })
  }

  async setUserAvatar(inputs) {
    return this._getResponse(this._url + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: inputs.avatar
      })
    })
  }
}
