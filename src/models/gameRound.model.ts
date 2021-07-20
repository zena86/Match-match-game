import User from './user.model';
import Setting from './settings.model';
import Card from './card.model';

enum GameRoundStatus {
  Stopped,
  Running,
  Won,
  Lost,
}
export default class GameRound {
  public startTime: Date;

  public user: User;

  public setting: Setting;

  public cards: Card[];

  public gameRoundStatus: GameRoundStatus;

  constructor(user: User, setting: Setting) {
    this.user = user;
    this.setting = setting;
  }

  init(): void {
    this.startTime = new Date();
    this.gameRoundStatus = GameRoundStatus.Running;
    let frontImgUrls = [];
    for (
      let i = 0;
      i < this.setting.cardDifficulty.difficultySize / 2;
      i += 1
    ) {
      const randomUrl = `./${this.setting.cardTheme.themeName}
/${Math.floor(Math.random() * this.setting.cardTheme.themeCardNum)}.svg`;
      frontImgUrls.push(randomUrl);
    }
    frontImgUrls = frontImgUrls.concat(frontImgUrls);
    frontImgUrls.sort(() => Math.random() - 0.5);
    this.cards = frontImgUrls.map((url) => new Card(url));
    this.calculateScore();
  }

  calculateTime(): string {
    const durationSec = this.calculateDuration();
    return `${Math.floor(durationSec / 60)} min ${Math.floor(
      durationSec % 60,
    )} sec`;
  }

  private calculateDuration() {
    return (new Date().getTime() - this.startTime.getTime()) / 1000;
  }

  calculateScore(): number {
    const durationSec = this.calculateDuration();
    const { difficultySize } = this.setting.cardDifficulty;
    const score = Math.max(
      Math.round((difficultySize / 2) * 100 - durationSec * 10),
      0,
    );
    return score;
  }

  updateScoreModel(score: number): void {
    this.user.score = Math.max(this.user.score, score);
  }
}
