export default class User {
  private id: number;

  public firstName: string;

  public lastName: string;

  public email: string;

  public avatar: string;

  public score: number;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.avatar = '';
    this.score = 0;
  }

  updateId(value: number): void {
    this.id = value;
  }

  getFirstNameError(): string {
    if (this.firstName === '') return 'First name can not be empty';
    const regexp = new RegExp(
      '^[^0-9 ~!@#$%*()_—+=|:;"\'`<>,.?/^][^~!@#$%*()_—+=|:;"\'`<>,.?/^]{0,30}$',
    );

    if (!regexp.test(this.firstName))
      return 'First name must contain only letters';
    return '';
  }

  getLastNameError(): string {
    if (this.lastName === '') return 'Last name can not be empty';
    const regexp = new RegExp(
      '^[^0-9 ~!@#$%*()_—+=|:;"\'`<>,.?/^][^~!@#$%*()_—+=|:;"\'`<>,.?/^]{0,30}$',
    );

    if (!regexp.test(this.lastName))
      return 'Last name must contain only letters';
    return '';
  }

  getEmailError(): string {
    if (this.email === '') return 'Email can not be empty';
    const regexp = new RegExp(
      `^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$`,
    );
    if (!regexp.test(this.email)) return 'Your email contains invalid symbol';
    return '';
  }
}
