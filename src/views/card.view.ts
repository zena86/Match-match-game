import '../styles/card.scss';
import backImgSrc from '../assets/images/back.jpg';
import doneImgSrc from '../assets/icons/done.svg';
import failedImgSrc from '../assets/icons/failed.svg';
import BaseView from './base.view';

export default class CardView extends BaseView {
  private boardEl: HTMLElement;

  private cardEl: HTMLElement;

  private frontCoverEl: HTMLElement;

  private frontMarkEl: HTMLImageElement;

  constructor(frontImgSrc: string, cardsPerRowNum: number) {
    super();
    this.cardEl = CardView.buildNode('div', 'card', null);

    const frontEl = CardView.buildNode('div', 'front', this.cardEl);

    this.frontMarkEl = CardView.buildNode(
      'img',
      'front-mark',
      frontEl,
    ) as HTMLImageElement;
    this.frontMarkEl.src = '';

    this.frontCoverEl = CardView.buildNode('div', 'front-cover', frontEl);

    const frontPicEl = CardView.buildNode('div', 'pic pic-front', frontEl);

    const frontPicImgEl = CardView.buildNode(
      'img',
      null,
      frontPicEl,
    ) as HTMLImageElement;
    frontPicImgEl.src = frontImgSrc;
    frontPicImgEl.alt = '';

    const backEl = CardView.buildNode('div', 'back', this.cardEl);

    this.cardEl.style.cssText = `flex-basis: calc(${
      100 / cardsPerRowNum
    }% - 10px); height: calc(${100 / cardsPerRowNum}% - 10px);`;

    const backPicEl = CardView.buildNode('div', 'pic pic-back', backEl);

    const backPicImgEl = CardView.buildNode(
      'img',
      null,
      backPicEl,
    ) as HTMLImageElement;
    backPicImgEl.src = backImgSrc;
    backPicImgEl.alt = '';
  }

  show(): void {
    this.boardEl = document.querySelector('.board');
    this.boardEl.appendChild(this.cardEl);
  }

  cardClickBind(callBack: () => void): void {
    this.cardEl.addEventListener('click', () => callBack());
  }

  showFront(): void {
    this.cardEl.classList.add('open');
  }

  showBack(): void {
    this.cardEl.classList.remove('open');
  }

  showDone(): void {
    this.frontCoverEl.classList.add('done');
    this.frontCoverEl.classList.remove('failed');
    this.frontMarkEl.src = doneImgSrc;
  }

  showFailed(): void {
    this.frontCoverEl.classList.add('failed');
    this.frontCoverEl.classList.remove('done');
    this.frontMarkEl.src = failedImgSrc;
  }

  showDefault(): void {
    this.frontCoverEl.classList.remove('failed');
    this.frontMarkEl.src = '';
  }
}
