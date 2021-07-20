export default class Timer {
  private startTime: Date;

  constructor() {
    this.startTime = new Date();
  }

  getDeltaTime(): number {
    return new Date().getTime() - this.startTime.getTime();
  }
}
