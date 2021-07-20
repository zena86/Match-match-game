import Card, { CardStatus } from '../models/card.model';
import CardView from '../views/card.view';

export default class CardController {
  private cardModel: Card;

  private cardView: CardView;

  constructor(cardModel: Card, cardView: CardView) {
    this.cardModel = cardModel;
    this.cardView = cardView;
    this.cardView.show();
  }

  cardClicBind(callBack: () => void): void {
    this.cardView.cardClickBind(callBack);
  }

  get model(): Card {
    return this.cardModel;
  }

  showFront(): void {
    this.cardView.showFront();
  }

  showBack(): void {
    this.cardView.showBack();
  }

  setDone(): void {
    this.cardView.showDone();
    this.cardModel.cardStatus = CardStatus.Done;
    this.cardModel.rightDecisionNum += 1;
  }

  setFailed(): void {
    this.cardView.showFailed();
    this.cardModel.wrongDecisionNum += 1;
  }

  showDefault(): void {
    this.cardView.showDefault();
  }
}
