export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector}) {
    this._avatar = document.querySelector(avatarSelector);
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    const name = this._name.textContent;
    const about = this._about.textContent;
    return { name, about };
  }

  setUserInfo(name, about) {
    this._name.textContent = name;
    this._about.textContent = about;
  }

  setUserAvatar(avatar) {
    this._avatar.src = avatar;
  }
}