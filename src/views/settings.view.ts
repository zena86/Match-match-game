import CardDifficulty from '../models/cardDifficulty.model';
import CardTheme from '../models/cardTheme.model';
import Settings from '../models/settings.model';
import '../styles/settings.scss';
import BaseView from './base.view';

export default class SettingView extends BaseView {
  private settingsEl: HTMLElement;

  private themesSelectEl: HTMLSelectElement;

  private difficultySelectEl: HTMLSelectElement;

  private settingsModel: Settings;

  constructor(settingsModel: Settings) {
    super();
    this.settingsModel = settingsModel;
    this.settingsEl = SettingView.buildNode('div', 'settings', null);
    /* THEMES DROPDOWN */
    const themesDropdownEl = SettingView.buildNode(
      'div',
      'dropdown',
      this.settingsEl,
    );
    SettingView.buildNode('p', 'dropdown__name', themesDropdownEl);
    const themesLabelEl = SettingView.buildNode(
      'label',
      'dropdown__label label',
      themesDropdownEl,
    );
    this.themesSelectEl = SettingView.buildNode(
      'select',
      'dropdown__select select',
      themesLabelEl,
    ) as HTMLSelectElement;
    /* DIFFICULTY DROPDOWN */
    const difficultyDropdownEl = SettingView.buildNode(
      'div',
      'dropdown',
      this.settingsEl,
    );
    SettingView.buildNode('p', 'dropdown__name', difficultyDropdownEl);
    const difficultyLabelEl = SettingView.buildNode(
      'label',
      'dropdown__label label',
      difficultyDropdownEl,
    );
    this.difficultySelectEl = SettingView.buildNode(
      'select',
      'dropdown__select select',
      difficultyLabelEl,
    ) as HTMLSelectElement;
  }

  show(): void {
    const mainBodyEl = document.querySelector('.main__body');
    mainBodyEl.appendChild(this.settingsEl);
    /* Options for themes */
    if (this.themesSelectEl.childNodes.length === 0) {
      this.settingsModel.themes.forEach((theme: CardTheme) => {
        const themesOptionEl = document.createElement('option');
        themesOptionEl.className = 'dropdown__select select';
        themesOptionEl.innerHTML = theme.themeName;
        this.themesSelectEl.appendChild(themesOptionEl);

        if (theme.themeName === this.settingsModel.cardTheme.themeName)
          themesOptionEl.selected = true;
      });
    }
    /* Options for difficulty */
    if (this.difficultySelectEl.childNodes.length === 0) {
      this.settingsModel.numbers.forEach((difficulty: CardDifficulty) => {
        const difficultyOptionEl = document.createElement('option');
        difficultyOptionEl.className = 'dropdown__select select';
        difficultyOptionEl.innerHTML = difficulty.difficultyName;
        this.difficultySelectEl.appendChild(difficultyOptionEl);

        if (
          difficulty.difficultyName ===
          this.settingsModel.cardDifficulty.difficultyName
        )
          difficultyOptionEl.selected = true;
      });
    }
  }

  themeChangeBind(callBack: (theme: CardTheme) => void): void {
    this.themesSelectEl.addEventListener('change', () => {
      const theme = this.settingsModel.themes.filter(
        (value) => value.themeName === this.themesSelectEl.value,
      )[0];
      callBack(theme);
    });
  }

  difficultyChangeBind(callBack: (num: CardDifficulty) => void): void {
    this.difficultySelectEl.addEventListener('change', () => {
      const num = this.settingsModel.numbers.filter(
        (difficulty) =>
          difficulty.difficultyName === this.difficultySelectEl.value,
      )[0];
      callBack(num);
    });
  }
}
