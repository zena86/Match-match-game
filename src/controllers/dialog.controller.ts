import DialogView from '../views/dialog.view';

export default class DialogController {
  private dialogView: DialogView;

  constructor(dialogView: DialogView) {
    this.dialogView = dialogView;
  }

  show(message: string): void {
    this.dialogView.show(message);
  }

  hide(): void {
    this.dialogView.hide();
  }

  okBtnClickBind(callBack: () => void): void {
    this.dialogView.okBtnClickBind(callBack);
  }
}
