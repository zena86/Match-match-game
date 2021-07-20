export enum CardStatus {
  Done,
  Unknown,
}
export default class Card {
  public imageUrl: string;

  public cardStatus: CardStatus;

  public wrongDecisionNum: number;

  public rightDecisionNum: number;

  constructor(imageUrl: string) {
    this.imageUrl = imageUrl;
    this.cardStatus = CardStatus.Unknown;
    this.wrongDecisionNum = 0;
    this.rightDecisionNum = 0;
  }
}
