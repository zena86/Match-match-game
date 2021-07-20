import User from '../models/user.model';
import '../styles/score.scss';
import BaseView from './base.view';
import defaultAvatarSrc from '../assets/images/user.png';

export default class ScoreView extends BaseView {
  private scoreWrapperEl: HTMLElement;

  private scoreTableEl: HTMLElement;

  constructor() {
    super();
    this.scoreWrapperEl = ScoreView.buildNode('div', 'score-wrapper', null);
    const titleEl = ScoreView.buildNode('h2', 'title', this.scoreWrapperEl);
    titleEl.innerHTML = 'Best players';
    this.scoreTableEl = ScoreView.buildNode(
      'table',
      'score__table',
      this.scoreWrapperEl,
    );
  }

  show(topUsers: User[]): void {
    this.scoreTableEl.innerHTML = '';
    const mainBodyEl = document.querySelector('.main__body');
    mainBodyEl.appendChild(this.scoreWrapperEl);
    /* Render list of users in score */
    topUsers.forEach((user) => {
      const trEl = ScoreView.buildNode('tr', null, this.scoreTableEl);
      /* AVATAR */
      const avatarThEl = ScoreView.buildNode('th', 'avatar-th', trEl);
      const avatarEl = ScoreView.buildNode('div', 'avatar', avatarThEl);
      const avatarPhotoEl = ScoreView.buildNode(
        'img',
        'avatar__photo',
        avatarEl,
      ) as HTMLImageElement;
      if (user.avatar === '') {
        avatarPhotoEl.src = defaultAvatarSrc;
      } else {
        avatarPhotoEl.src = user.avatar;
      }
      avatarPhotoEl.alt = 'user photo';
      /* PROFILE */
      const profileThEl = ScoreView.buildNode(
        'th',
        'profile-th data-text',
        trEl,
      );
      const profileDivEl = ScoreView.buildNode('div', null, profileThEl);
      const firstNameEl = ScoreView.buildNode(
        'span',
        'user__firstname data-text',
        profileDivEl,
      );
      firstNameEl.innerHTML = `${user.firstName} `;
      const lastNameEl = ScoreView.buildNode(
        'span',
        'user__lastname data-text',
        profileDivEl,
      );
      lastNameEl.innerHTML = `${user.lastName} `;
      const emailEl = ScoreView.buildNode('p', 'user__email', profileDivEl);
      emailEl.innerHTML = user.email;
      /* Score */
      const scoreThEl = ScoreView.buildNode('th', 'data-text', trEl);
      const scoreDivEl = ScoreView.buildNode('div', null, scoreThEl);
      const scoreDataEl = ScoreView.buildNode('p', 'score__data', scoreDivEl);
      const scoreLabelEl = ScoreView.buildNode(
        'span',
        'score__label data-text',
        scoreDataEl,
      );
      scoreLabelEl.innerHTML = 'Score:';
      const scoreValueEl = ScoreView.buildNode(
        'span',
        'score__value',
        scoreDataEl,
      );
      scoreValueEl.innerHTML = user.score.toString();
    });
  }
}
