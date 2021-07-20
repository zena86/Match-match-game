import '../styles/gameRound.scss';
import BaseView from './base.view';

export default class GameRoundView extends BaseView {
  private gameWrapper: HTMLElement;

  private boardEl: HTMLElement;

  constructor() {
    super();
    this.gameWrapper = GameRoundView.buildNode('div', 'game-wrapper', null);

    const boardBoxEl = GameRoundView.buildNode(
      'div',
      'board__box',
      this.gameWrapper,
    );

    this.boardEl = GameRoundView.buildNode('div', 'board', boardBoxEl);
  }

  show(): void {
    const mainBodyEl = document.querySelector('.main__body');
    mainBodyEl.appendChild(this.gameWrapper);
  }

  cleanBoard(): void {
    this.boardEl.innerHTML = '';
  }
}
