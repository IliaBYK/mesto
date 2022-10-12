export default class UserInfo {
  constructor({profileSelector, aboutSelector}) {
    this._profile = document.querySelector(profileSelector);
    this._about = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    const profile = this._profile.textContent;
    const about = this._about.textContent;
    return { profile, about };
  }

  setUserInfo({profile, about}) {
    this._profile.textContent = profile;
    this._about.textContent = about;
  }
}