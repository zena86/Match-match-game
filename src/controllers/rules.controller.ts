import RulesView from '../views/rules.view';

export default class RulesController {
  private rulesView: RulesView;

  constructor(rulesView: RulesView) {
    this.rulesView = rulesView;
  }

  showRules(): void {
    RulesView.clear();
    this.rulesView.show();
  }
}
