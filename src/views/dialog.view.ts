import '../styles/dialog.scss';
import BaseView from './base.view';

export default class DialogView extends BaseView {
  private coverEl: HTMLElement;

  private okBtnEl: HTMLButtonElement;

  private formAlertTextEl: HTMLElement;

  constructor() {
    super();
    this.coverEl = DialogView.buildNode('div', 'cover', null);

    const dialogBodyEl = DialogView.buildNode(
      'div',
      'dialog-body',
      this.coverEl,
    );

    this.formAlertTextEl = DialogView.buildNode(
      'p',
      'form__alert-text',
      dialogBodyEl,
    );

    this.okBtnEl = DialogView.buildNode(
      'button',
      'form__btn btn btn_ok',
      dialogBodyEl,
    ) as HTMLButtonElement;
    this.okBtnEl.innerHTML = 'OK';
  }

  show(message: string): void {
    const wrapperEl = document.querySelector('.wrapper');
    wrapperEl.appendChild(this.coverEl);
    this.formAlertTextEl.innerHTML = message;
  }

  hide(): void {
    const wrapperEl = document.querySelector('.wrapper');
    if (wrapperEl.contains(this.coverEl)) wrapperEl.removeChild(this.coverEl);
  }

  okBtnClickBind(callBack: () => void): void {
    this.okBtnEl.addEventListener('click', () => callBack());
  }
}
