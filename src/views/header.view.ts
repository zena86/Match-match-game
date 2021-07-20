import '../styles/header.scss';

import rulesBtnImgSrc from '../assets/icons/question.svg';
import scoreBtnImgSrc from '../assets/icons/star.svg';
import settingBtnImgSrc from '../assets/icons/setting.svg';
import avatarImgSrc from '../assets/images/user.png';
import BaseView from './base.view';

export default class HeaderView extends BaseView {
  public rulesBtn: HTMLElement;

  private scoreBtn: HTMLElement;

  private settingsBtn: HTMLElement;

  private headerRightEl: HTMLElement;

  private registerBtn: HTMLElement;

  private startBtn: HTMLElement;

  private stopBtn: HTMLElement;

  private avatar: HTMLElement;

  constructor() {
    super();
    const headerEl = document.querySelector('.header');
    const containerHeaderEl = HeaderView.buildNode(
      'div',
      'container',
      headerEl,
    );
    const headerBodyEl = HeaderView.buildNode(
      'div',
      'header__body',
      containerHeaderEl,
    );
    /* LOGO */
    const headerLogoEl = HeaderView.buildNode(
      'div',
      'header__logo logo',
      headerBodyEl,
    );
    const logoTopEl = HeaderView.buildNode(
      'div',
      'logo__item logo__item_top',
      headerLogoEl,
    );
    const logoTopSpanEl = HeaderView.buildNode('span', null, logoTopEl);
    logoTopSpanEl.innerHTML = 'match';
    const logoBottomEl = HeaderView.buildNode(
      'div',
      'logo__item logo__item_bottom',
      headerLogoEl,
    );
    const logoBottomSpanEl = HeaderView.buildNode('span', null, logoBottomEl);
    logoBottomSpanEl.innerHTML = 'match';
    /* NAV */
    const headerNavEl = HeaderView.buildNode(
      'nav',
      'header__nav',
      headerBodyEl,
    );
    const headerMenuEl = HeaderView.buildNode(
      'ul',
      'header__menu',
      headerNavEl,
    );
    HeaderView.buildNode('li', 'header__menu-item', headerMenuEl);
    /* ABOUT GAME */
    this.rulesBtn = HeaderView.buildNode(
      'a',
      'header__menu-btn menu-btn',
      headerMenuEl,
    );
    const rulesBtnInnerEl = HeaderView.buildNode(
      'div',
      'menu-btn__inner',
      this.rulesBtn,
    );
    const rulesBtnIconEl = HeaderView.buildNode(
      'div',
      'menu-btn__icon',
      rulesBtnInnerEl,
    );
    const rulesBtnIconImgEl = HeaderView.buildNode(
      'img',
      null,
      rulesBtnIconEl,
    ) as HTMLImageElement;
    rulesBtnIconImgEl.src = rulesBtnImgSrc;
    rulesBtnIconImgEl.alt = '';
    const rulesBtnTextEl = HeaderView.buildNode(
      'p',
      'menu-btn__text',
      rulesBtnInnerEl,
    );
    rulesBtnTextEl.innerHTML = 'About&nbsp;Game';
    /* BEST SCORE */
    this.scoreBtn = HeaderView.buildNode(
      'a',
      'header__menu-btn menu-btn',
      headerMenuEl,
    );
    const scoreBtnInnerEl = HeaderView.buildNode(
      'div',
      'menu-btn__inner',
      this.scoreBtn,
    );
    const scoreBtnIconEl = HeaderView.buildNode(
      'div',
      'menu-btn__icon',
      scoreBtnInnerEl,
    );
    const scoreBtnIconImgEl = HeaderView.buildNode(
      'img',
      null,
      scoreBtnIconEl,
    ) as HTMLImageElement;
    scoreBtnIconImgEl.src = scoreBtnImgSrc;
    scoreBtnIconImgEl.alt = '';
    const scoreBtnTextEl = HeaderView.buildNode(
      'p',
      'menu-btn__text',
      scoreBtnInnerEl,
    );
    scoreBtnTextEl.innerHTML = 'Best&nbsp;Score';
    /* GAME SETTINGS */
    this.settingsBtn = HeaderView.buildNode(
      'a',
      'header__menu-btn menu-btn',
      headerMenuEl,
    );
    const settingsBtnInnerEl = HeaderView.buildNode(
      'div',
      'menu-btn__inner',
      this.settingsBtn,
    );
    const settingsBtnIconEl = HeaderView.buildNode(
      'div',
      'menu-btn__icon',
      settingsBtnInnerEl,
    );
    const settingsBtnIconImgEl = HeaderView.buildNode(
      'img',
      null,
      settingsBtnIconEl,
    ) as HTMLImageElement;
    settingsBtnIconImgEl.src = settingBtnImgSrc;
    settingsBtnIconImgEl.alt = '';
    const settingsBtnTextEl = HeaderView.buildNode(
      'p',
      'menu-btn__text',
      settingsBtnInnerEl,
    );
    settingsBtnTextEl.innerHTML = 'Game&nbsp;Settings';
    /* HEADER RIGHT */
    this.headerRightEl = HeaderView.buildNode(
      'div',
      'header__right',
      headerBodyEl,
    );
    this.registerBtn = HeaderView.buildNode(
      'button',
      'header__btn btn',
      this.headerRightEl,
    );
    this.registerBtn.innerHTML = 'register new player';
    this.startBtn = HeaderView.buildNode(
      'button',
      'header__btn btn',
      this.headerRightEl,
    );
    this.startBtn.innerHTML = 'start game';
    this.stopBtn = HeaderView.buildNode(
      'button',
      'header__btn btn',
      this.headerRightEl,
    );
    this.stopBtn.innerHTML = 'stop game';
  }

  /* BTN BIND */
  rulesBtnBind(callBack: () => void): void {
    this.rulesBtn.addEventListener('click', () => {
      callBack();
      this.highlightRulesRout();
    });
  }

  scoreBtnBind(callBack: () => void): void {
    this.scoreBtn.addEventListener('click', () => {
      callBack();
      this.highlightScoreRout();
    });
  }

  settingsBtnBind(callBack: () => void): void {
    this.settingsBtn.addEventListener('click', () => {
      callBack();
      this.highlightSettingsRout();
    });
  }

  registerBtnBind(callBack: () => void): void {
    this.registerBtn.addEventListener('click', () => callBack());
  }

  startBtnBind(callBack: () => void): void {
    this.startBtn.addEventListener('click', () => callBack());
  }

  stopBtnBind(callBack: () => void): void {
    this.stopBtn.addEventListener('click', () => callBack());
  }

  /* BTN HIDE-SHOW */
  removeRegisterBtn(): void {
    if (this.headerRightEl.contains(this.registerBtn))
      this.headerRightEl.removeChild(this.registerBtn);
  }

  removeStopBtn(): void {
    if (this.headerRightEl.contains(this.stopBtn))
      this.headerRightEl.removeChild(this.stopBtn);
  }

  removeStartBtn(): void {
    if (this.headerRightEl.contains(this.startBtn))
      this.headerRightEl.removeChild(this.startBtn);
  }

  addStartBtn(): void {
    if (!this.headerRightEl.contains(this.startBtn))
      this.headerRightEl.insertBefore(
        this.startBtn,
        this.headerRightEl.firstChild,
      );
  }

  addStopBtn(): void {
    if (!this.headerRightEl.contains(this.stopBtn))
      this.headerRightEl.insertBefore(
        this.stopBtn,
        this.headerRightEl.firstChild,
      );
  }

  /* AVATAR */
  setAvatar(src: string): void {
    const avatarImgEl = document.createElement('img');

    this.avatar = document.createElement('div');
    this.avatar.className = 'avatar';
    this.headerRightEl.appendChild(this.avatar);
    avatarImgEl.src = src === '' ? avatarImgSrc : src;
    avatarImgEl.alt = '';
    this.avatar.appendChild(avatarImgEl);
  }

  /* ROUT */
  highlightRulesRout(): void {
    this.rulesBtn.classList.add('active-rout');
    this.scoreBtn.classList.remove('active-rout');
    this.settingsBtn.classList.remove('active-rout');
  }

  highlightScoreRout(): void {
    this.scoreBtn.classList.add('active-rout');
    this.rulesBtn.classList.remove('active-rout');
    this.settingsBtn.classList.remove('active-rout');
  }

  highlightSettingsRout(): void {
    this.settingsBtn.classList.add('active-rout');
    this.rulesBtn.classList.remove('active-rout');
    this.scoreBtn.classList.remove('active-rout');
  }
}
