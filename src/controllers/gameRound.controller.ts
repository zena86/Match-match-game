import { CardStatus } from '../models/card.model';
import GameRound from '../models/gameRound.model';
import Timer from '../models/timer.model';
import { IScoreService } from '../services/score.service';
import CardView from '../views/card.view';
import GameRoundView from '../views/gameRound.view';
import TimerView from '../views/timer.view';
import CardController from './card.controller';
import DialogController from './dialog.controller';
import HeaderController from './header.controller';
import TimerController from './timer.controller';

export default class GameRoundController {
  private gameRoundView: GameRoundView;

  private gameRoundModel: GameRound;

  private lastCardController: CardController;

  private canOpenCard: boolean;

  private timerController: TimerController;

  private scoreService: IScoreService;

  private headerController: HeaderController;

  private dialogController: DialogController;

  constructor(
    gameRoundView: GameRoundView,
    gameRoundModel: GameRound,
    scoreService: IScoreService,
    headerController: HeaderController,
    dialogController: DialogController,
  ) {
    this.gameRoundView = gameRoundView;
    this.gameRoundModel = gameRoundModel;
    this.scoreService = scoreService;
    this.lastCardController = null;
    this.canOpenCard = false;
    this.timerController = new TimerController(new TimerView(), new Timer());
    this.headerController = headerController;
    this.dialogController = dialogController;
  }

  show(): void {
    GameRoundView.clear();
    this.gameRoundView.show();
  }

  startGame(): void {
    this.canOpenCard = false;
    GameRoundView.clear();
    this.gameRoundView.cleanBoard();
    this.gameRoundModel.init();
    this.gameRoundView.show();
    this.timerController.start();
    const controllers = this.createCardControllers();
    this.showCardsBeforeStartGame(controllers);
    this.doOnCardClick(controllers);
  }

  createCardControllers(): CardController[] {
    const cardsPerRowNum = Math.sqrt(this.gameRoundModel.cards.length);
    const controllers: CardController[] = this.gameRoundModel.cards.map(
      (cardModel) => {
        return new CardController(
          cardModel,
          new CardView(cardModel.imageUrl, cardsPerRowNum),
        );
      },
    );
    return controllers;
  }

  doOnCardClick(controllers: CardController[]): void {
    controllers.forEach((controller) => {
      controller.cardClicBind(() => {
        if (controller.model.cardStatus === CardStatus.Done) return;
        if (!this.canOpenCard) return;
        this.canOpenCard = false;
        controller.showFront();
        if (this.lastCardController !== null) {
          if (this.lastCardController === controller) {
            this.canOpenCard = true;
            return;
          }
          if (
            this.lastCardController.model.imageUrl === controller.model.imageUrl
          ) {
            this.lastCardController.setDone();
            controller.setDone();
            this.canOpenCard = true;
          } else {
            this.lastCardController.setFailed();
            controller.setFailed();
            const lastCardControllerCopy = this.lastCardController;
            setTimeout(() => {
              lastCardControllerCopy.showBack();
              controller.showBack();
              lastCardControllerCopy.showDefault();
              controller.showDefault();
              this.canOpenCard = true;
            }, 1500);
          }
          this.lastCardController = null;
        } else {
          this.lastCardController = controller;
          this.canOpenCard = true;
        }
        this.checkFinish();
      });
    });
  }

  showCardsBeforeStartGame(controllers: CardController[]): void {
    controllers.forEach((controller) => {
      controller.showFront();
    });
    setTimeout(() => {
      this.canOpenCard = true;
      controllers.forEach((controller) => {
        controller.showBack();
      });
    }, 30000);
  }

  checkFinish(): void {
    for (let i = 0; i < this.gameRoundModel.cards.length; i += 1)
      if (this.gameRoundModel.cards[i].cardStatus === CardStatus.Unknown)
        return;
    this.headerController.prepareStartGame();
    const score = this.gameRoundModel.calculateScore();
    setTimeout(() => {
      this.timerController.stop();
      this.dialogController.show(
        `Congratulations! You successfully found all matches on ${this.gameRoundModel.calculateTime()}.`,
      );

      this.gameRoundModel.updateScoreModel(score);
      this.scoreService.putUser(this.gameRoundModel.user);
    }, 1000);
  }
}
