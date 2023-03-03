export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindMenuOpenChange(this.onMenuOpenChange);
    this.view.bindChangeMenuOpen(this.handleChangeMenuOpen);
    this.view.setMenuOpen(this.model.isMenuOpen);
  }

  onMenuOpenChange = () => {
    this.view.setMenuOpen(this.model.isMenuOpen);
  }

  handleChangeMenuOpen = () => {
    this.model.isMenuOpen = !this.model.isMenuOpen;
  }
}
