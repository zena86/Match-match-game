import CardDifficulty from './cardDifficulty.model';
import CardTheme from './cardTheme.model';

export default class Settings {
  public cardTheme: CardTheme;

  public cardDifficulty: CardDifficulty;

  private themesList: CardTheme[];

  private difficultyList: CardDifficulty[];

  constructor(cardDifficulty: CardDifficulty, cardTheme: CardTheme) {
    this.cardDifficulty = cardDifficulty;
    this.cardTheme = cardTheme;
    /* Add Themes */
    this.themesList = [];
    this.themesList.push(
      new CardTheme('animals', 100),
      new CardTheme('birds', 49),
      new CardTheme('food', 75),
      new CardTheme('people', 50),
      new CardTheme('professions', 50),
    );

    /* Add difficulty */
    this.difficultyList = [];
    this.difficultyList.push(
      new CardDifficulty('small', 16),
      new CardDifficulty('medium', 36),
      new CardDifficulty('big', 64),
    );
  }

  get themes(): CardTheme[] {
    return this.themesList;
  }

  get numbers(): CardDifficulty[] {
    return this.difficultyList;
  }
}
