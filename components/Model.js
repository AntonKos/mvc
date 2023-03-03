export default class Model {
  constructor(currentMenuItem) {
    this.currentMenuItem = currentMenuItem;
    this._isMenuOpen = false;
  }

  get isMenuOpen() {
    return this._isMenuOpen;
  }

  set isMenuOpen(isMenuOpen) {
    this._isMenuOpen = isMenuOpen;
    this.onMenuOpenChange();
  }

  bindMenuOpenChange(callback) {
    this.onMenuOpenChange = callback;
  }
}
