import BaseView from './base.view';

export default class AppView extends BaseView {
  constructor() {
    super();
    const rootEl = document.querySelector('#root');

    const wrapperEl = AppView.buildNode('div', 'wrapper', rootEl);
    AppView.buildNode('header', 'header', wrapperEl);
    const mainEl = AppView.buildNode('main', 'main', wrapperEl);
    AppView.buildNode('div', 'main__body', mainEl);
  }
}
