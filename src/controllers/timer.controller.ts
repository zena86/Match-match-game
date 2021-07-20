import Timer from '../models/timer.model';
import TimerView from '../views/timer.view';

export default class TimerController {
  private timerView: TimerView;

  private timerModel: Timer;

  private timerObj: number;

  constructor(timerView: TimerView, timerModel: Timer) {
    this.timerView = timerView;
    this.timerModel = timerModel;
  }

  start(): void {
    this.timerView.show();
    this.timerObj = window.setInterval(() => {
      this.tick();
    }, 1000);
  }

  stop(): void {
    window.clearInterval(this.timerObj);
  }

  private tick(): void {
    const deltaTime = this.timerModel.getDeltaTime();
    this.timerView.updateTimer(deltaTime);
  }
}
