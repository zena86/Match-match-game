import HeaderView from '../views/header.view';

export default class HeaderController {
  private headerView: HeaderView;

  constructor(headerView: HeaderView) {
    this.headerView = headerView;

    this.headerView.removeStopBtn();
    this.headerView.removeStartBtn();
  }

  rulesBtnClickBind(callBack: () => void): void {
    this.headerView.rulesBtnBind(callBack);
  }

  scoreBtnClickBind(callBack: () => void): void {
    this.headerView.scoreBtnBind(callBack);
  }

  settingsBtnClickBind(callBack: () => void): void {
    this.headerView.settingsBtnBind(callBack);
  }

  registerBtnClickBind(callBack: () => void): void {
    this.headerView.registerBtnBind(callBack);
  }

  startBtnClickBind(callBack: () => void): void {
    this.headerView.startBtnBind(callBack);
  }

  stopBtnClickBind(callBack: () => void): void {
    this.headerView.stopBtnBind(callBack);
  }

  /* Remove btn */
  prepareStartGame(): void {
    this.headerView.removeRegisterBtn();
    this.headerView.removeStopBtn();
    this.headerView.addStartBtn();
  }

  prepareStopGame(): void {
    this.headerView.removeStartBtn();
    this.headerView.addStopBtn();
  }

  setAvatar(src: string): void {
    this.headerView.setAvatar(src);
  }

  highlightRulesRout(): void {
    this.headerView.highlightRulesRout();
  }

  highlightScoreRout(): void {
    this.headerView.highlightScoreRout();
  }
}
