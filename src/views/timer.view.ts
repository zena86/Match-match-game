import BaseView from './base.view';

export default class TimerView extends BaseView {
  private timerBoxEl: HTMLElement;

  private timerValue: HTMLElement;

  constructor() {
    super();
    this.timerBoxEl = TimerView.buildNode('div', 'timer__box', null);
    this.timerValue = TimerView.buildNode(
      'span',
      'timer__value',
      this.timerBoxEl,
    );
    this.timerValue.innerHTML = '00:00';
  }

  show(): void {
    const gameWrapper = document.querySelector('.game-wrapper');
    gameWrapper.insertBefore(this.timerBoxEl, gameWrapper.firstChild);
  }

  updateTimer(timeValue: number): void {
    const minutes = Math.floor(timeValue / 60000);
    const seconds = Math.floor(timeValue / 1000) % 60;
    const minutesStr = `0${minutes}`.substr(-2);
    const secondsStr = `0${seconds}`.substr(-2);
    this.timerValue.innerHTML = `${minutesStr}:${secondsStr}`;
  }
}
