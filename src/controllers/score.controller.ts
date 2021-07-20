import { IScoreService } from '../services/score.service';
import ScoreView from '../views/score.view';

export default class ScoreController {
  private scoreView: ScoreView;

  private scoreService: IScoreService;

  constructor(scoreView: ScoreView, scoreService: IScoreService) {
    this.scoreView = scoreView;
    this.scoreService = scoreService;
  }

  show(): void {
    ScoreView.clear();
    this.scoreService.getTopUsers(10, (topUsers) => {
      this.scoreView.show(topUsers);
    });
  }
}
