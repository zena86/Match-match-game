import './styles/index.scss';
import './index.html';
import RulesView from './views/rules.view';
import HeaderView from './views/header.view';
import HeaderController from './controllers/header.controller';
import RegisrationView from './views/registration.view';
import RegistrationController from './controllers/registration.controller';
import User from './models/user.model';
import GameRoundController from './controllers/gameRound.controller';
import GameRoundView from './views/gameRound.view';
import RulesController from './controllers/rules.controller';
import GameRound from './models/gameRound.model';
import AppView from './views/app.view';
import Settings from './models/settings.model';
import CardTheme from './models/cardTheme.model';
import SettingView from './views/settings.view';
import SettingsController from './controllers/settings.controller';
import CardDifficulty from './models/cardDifficulty.model';
import ScoreController from './controllers/score.controller';
import ScoreView from './views/score.view';
import ScoreService from './services/score.service';
import DialogController from './controllers/dialog.controller';
import DialogView from './views/dialog.view';

class AppController {
  private appView: AppView;

  private user: User;

  private settings: Settings;

  constructor(appView: AppView) {
    this.appView = appView;
    this.settings = new Settings(
      new CardDifficulty('small', 16),
      new CardTheme('professions', 50),
    );
  }

  init() {
    const scoreService = new ScoreService();

    const headerController = new HeaderController(new HeaderView());
    const rulesController = new RulesController(new RulesView());
    const settingsController = new SettingsController(
      new SettingView(this.settings),
      this.settings,
    );

    const scoreController = new ScoreController(new ScoreView(), scoreService);

    const dialogController = new DialogController(new DialogView());

    /* Show rules */
    rulesController.showRules();
    headerController.highlightRulesRout();
    headerController.rulesBtnClickBind(() => {
      rulesController.showRules();
      headerController.highlightScoreRout();
    });
    /* Show score */
    headerController.scoreBtnClickBind(() => {
      scoreController.show();
    });
    /* Show settings */
    headerController.settingsBtnClickBind(() => {
      settingsController.show();
      if (this.user) {
        headerController.prepareStartGame();
      }
    });
    /* Show registration */
    headerController.registerBtnClickBind(() => {
      this.user = new User();
      const registrationController = new RegistrationController(
        new RegisrationView(),
        this.user,
        headerController,
        scoreService,
      );
      registrationController.show();
    });
    /* Show table score */
    dialogController.okBtnClickBind(() => {
      dialogController.hide();
      scoreController.show();
      headerController.highlightScoreRout();
    });
    /* Start game */
    headerController.startBtnClickBind(() => {
      const gameRoundModel = new GameRound(this.user, this.settings);
      const gameRoundController = new GameRoundController(
        new GameRoundView(),
        gameRoundModel,
        scoreService,
        headerController,
        dialogController,
      );
      gameRoundController.startGame();
      headerController.prepareStopGame();
    });
    /* Stop game */
    headerController.stopBtnClickBind(() => {
      rulesController.showRules();
      headerController.prepareStartGame();
    });
  }
}

const app = new AppController(new AppView());
app.init();
