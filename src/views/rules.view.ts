import '../styles/rules.scss';
import step1ImgSrc from '../assets/images/form.jpg';
import step2ImgSrc from '../assets/icons/setting.svg';
import step3ImgSrc from '../assets/images/game.jpg';
import BaseView from './base.view';

export default class RulesView extends BaseView {
  private rulesEl: HTMLElement;

  constructor() {
    super();
    this.rulesEl = RulesView.buildNode('div', 'main__rules', null);
    RulesView.buildNode('h2', 'title', this.rulesEl);
    /* STEP 1 */
    const mainRowEl = RulesView.buildNode('div', 'main__row', this.rulesEl);
    const stepEl = RulesView.buildNode('div', 'step', mainRowEl);
    const stepNumEl = RulesView.buildNode('div', 'step__num', stepEl);
    const stepNumSpanEl = RulesView.buildNode('span', null, stepNumEl);
    stepNumSpanEl.innerHTML = '1';
    const stepTextEl = RulesView.buildNode('p', 'step__text', stepEl);
    stepTextEl.innerHTML = 'Register new player in game';
    const stepPicEl = RulesView.buildNode('div', 'step__pic', mainRowEl);
    const stepPicImgEl = RulesView.buildNode(
      'img',
      null,
      stepPicEl,
    ) as HTMLImageElement;
    stepPicImgEl.src = step1ImgSrc;
    stepPicImgEl.alt = '';
    /* STEP 2 */
    const mainRow2El = RulesView.buildNode('div', 'main__row', this.rulesEl);
    const step2El = RulesView.buildNode('div', 'step step_sm', mainRow2El);
    const stepNum2El = RulesView.buildNode('div', 'step__num', step2El);
    const stepNumSpan2El = RulesView.buildNode('span', null, stepNum2El);
    stepNumSpan2El.innerHTML = '2';
    const stepText2El = RulesView.buildNode('p', 'step__text', step2El);
    stepText2El.innerHTML = 'Configure your game settings';
    const settingBtnEl = RulesView.buildNode(
      'a',
      'menu-btn_screen menu-btn_main',
      mainRow2El,
    );
    const menuBtnInnerEl = RulesView.buildNode(
      'div',
      'menu-btn__inner',
      settingBtnEl,
    );
    const menuBtnIconEl = RulesView.buildNode(
      'div',
      'menu-btn__icon',
      menuBtnInnerEl,
    );
    const menuBtnIconImgEl = RulesView.buildNode(
      'img',
      null,
      menuBtnIconEl,
    ) as HTMLImageElement;
    menuBtnIconImgEl.src = step2ImgSrc;
    const menuBtnTextEl = RulesView.buildNode(
      'p',
      'menu-btn__text-screen',
      menuBtnInnerEl,
    );
    menuBtnTextEl.innerHTML = 'Game&nbsp;Settings';
    /* STEP 3 */
    const mainRow3El = RulesView.buildNode('div', 'main__row', this.rulesEl);
    const step3El = RulesView.buildNode('div', 'step', mainRow3El);
    const stepNum3El = RulesView.buildNode('div', 'step__num', step3El);
    const stepNumSpan3El = RulesView.buildNode('span', null, stepNum3El);
    stepNumSpan3El.innerHTML = '3';
    const stepText3El = RulesView.buildNode('p', 'step__text', step3El);
    stepText3El.innerHTML = `Start you new game! 
    Remember card positions and match it before times up.`;
    const stepPic3El = RulesView.buildNode('div', 'step__pic', mainRow3El);
    const stepPic3ImgEl = RulesView.buildNode(
      'img',
      'img-board',
      stepPic3El,
    ) as HTMLImageElement;
    stepPic3ImgEl.src = step3ImgSrc;
    stepPic3ImgEl.alt = '';
  }

  show(): void {
    const mainBodyEl = document.querySelector('.main__body');
    mainBodyEl.appendChild(this.rulesEl);
  }

  hide(): void {
    const mainBodyEl = document.querySelector('.main__body');
    if (mainBodyEl.contains(this.rulesEl))
      this.rulesEl = mainBodyEl.removeChild(this.rulesEl);
  }
}
