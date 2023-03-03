import Model from './components/Model.js';
import View from './components/View.js';
import Controller from './components/Controller.js';

export default class App {
  init() {
    this.model = new Model();
    this.view = new View();
    this.controller = new Controller(this.model, this.view);
  }
}
