import CardDifficulty from '../models/cardDifficulty.model';
import CardTheme from '../models/cardTheme.model';
import Settings from '../models/settings.model';

import SettingView from '../views/settings.view';

export default class SettingsController {
  private settingsView: SettingView;

  private settingsModel: Settings;

  constructor(settingsView: SettingView, settingsModel: Settings) {
    this.settingsView = settingsView;
    this.settingsModel = settingsModel;

    this.settingsView.themeChangeBind((theme: CardTheme) => {
      this.settingsModel.cardTheme = theme;
    });

    this.settingsView.difficultyChangeBind((num: CardDifficulty) => {
      this.settingsModel.cardDifficulty = num;
    });
  }

  show(): void {
    SettingView.clear();
    this.settingsView.show();
  }
}
