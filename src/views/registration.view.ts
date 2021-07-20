import '../styles/registration.scss';
import avatarImgSrc from '../assets/images/user.png';
import avatarPlusImgSrc from '../assets/icons/plus.svg';
import BaseView from './base.view';

export default class RegisrationView extends BaseView {
  private firstNameEl: HTMLInputElement;

  private lastNameEl: HTMLInputElement;

  private emailEl: HTMLInputElement;

  private formMarkFirstNameEl: HTMLElement;

  private formMarkLastNameEl: HTMLElement;

  private formMarkEmailEl: HTMLElement;

  private avatarInputEl: HTMLInputElement;

  private avatarImgEl: HTMLImageElement;

  private addBtnEl: HTMLButtonElement;

  private cancelBtnEl: HTMLElement;

  private coverEl: HTMLElement;

  constructor() {
    super();

    this.coverEl = RegisrationView.buildNode('div', 'cover', null);
    const formEl = RegisrationView.buildNode('div', 'form', this.coverEl);
    const formHeaderEl = RegisrationView.buildNode(
      'div',
      'form__header',
      formEl,
    );
    const formTitleEl = RegisrationView.buildNode('h2', 'title', formHeaderEl);
    formTitleEl.innerHTML = 'Register new Player';
    const formMainEl = RegisrationView.buildNode('div', 'form__main', formEl);
    const formFieldsEl = RegisrationView.buildNode(
      'div',
      'form__fields',
      formMainEl,
    );
    /* FIRST NAME */
    const formField1El = RegisrationView.buildNode(
      'div',
      'form__field',
      formFieldsEl,
    );
    const formContent1El = RegisrationView.buildNode(
      'div',
      'form__content',
      formField1El,
    );
    const formLabel1El = RegisrationView.buildNode(
      'label',
      'form__label',
      formContent1El,
    );
    formLabel1El.innerHTML = 'First Name';
    this.firstNameEl = RegisrationView.buildNode(
      'input',
      'form__input',
      formContent1El,
    ) as HTMLInputElement;
    this.firstNameEl.type = 'text';
    this.firstNameEl.id = 'firstname';
    this.firstNameEl.placeholder = 'Jessie';
    this.formMarkFirstNameEl = RegisrationView.buildNode(
      'div',
      'form__mark default',
      formField1El,
    );
    RegisrationView.buildNode('div', 'checkbox', this.formMarkFirstNameEl);
    /* LAST NAME */
    const formField2El = RegisrationView.buildNode(
      'div',
      'form__field',
      formFieldsEl,
    );
    const formContent2El = RegisrationView.buildNode(
      'div',
      'form__content',
      formField2El,
    );
    const formLabel2El = RegisrationView.buildNode(
      'label',
      'form__label',
      formContent2El,
    );
    formLabel2El.innerHTML = 'Last Name';

    this.lastNameEl = RegisrationView.buildNode(
      'input',
      'form__input',
      formContent2El,
    ) as HTMLInputElement;
    this.lastNameEl.type = 'text';
    this.lastNameEl.id = 'lastname';
    this.lastNameEl.placeholder = 'Doe';
    this.formMarkLastNameEl = RegisrationView.buildNode(
      'div',
      'form__mark default',
      formField2El,
    );
    RegisrationView.buildNode('div', 'checkbox', this.formMarkLastNameEl);
    /* EMAIL */
    const formField3El = RegisrationView.buildNode(
      'div',
      'form__field',
      formFieldsEl,
    );
    const formContent3El = RegisrationView.buildNode(
      'div',
      'form__content',
      formField3El,
    );
    const formLabel3El = RegisrationView.buildNode(
      'label',
      'form__label',
      formContent3El,
    );
    formLabel3El.innerHTML = 'E-mail';
    this.emailEl = RegisrationView.buildNode(
      'input',
      'form__input',
      formContent3El,
    ) as HTMLInputElement;
    this.emailEl.type = 'email';
    this.emailEl.id = 'email';
    this.emailEl.placeholder = 'Jessie.Doe@gmail.com';
    this.formMarkEmailEl = RegisrationView.buildNode(
      'div',
      'form__mark default',
      formField3El,
    );
    RegisrationView.buildNode('div', 'checkbox', this.formMarkEmailEl);
    /* AVATAR */
    this.avatarInputEl = RegisrationView.buildNode(
      'input',
      'hide',
      formMainEl,
    ) as HTMLInputElement;
    this.avatarInputEl.type = 'file';
    this.avatarInputEl.name = 'upload';
    this.avatarInputEl.id = 'avatar';
    const avatarLabelEl = RegisrationView.buildNode(
      'label',
      'form__avatar',
      formMainEl,
    ) as HTMLLabelElement;
    avatarLabelEl.htmlFor = 'avatar';
    this.avatarImgEl = RegisrationView.buildNode(
      'img',
      null,
      avatarLabelEl,
    ) as HTMLImageElement;
    this.avatarImgEl.src = avatarImgSrc;
    this.avatarImgEl.alt = '';
    const avatarPlusEl = RegisrationView.buildNode(
      'div',
      'avatar__plus',
      avatarLabelEl,
    );
    const avatarPlusImgEl = RegisrationView.buildNode(
      'img',
      null,
      avatarPlusEl,
    ) as HTMLImageElement;
    avatarPlusImgEl.alt = '';
    avatarPlusImgEl.src = avatarPlusImgSrc;
    /* FORM FOOTER */
    const formFooterEl = RegisrationView.buildNode(
      'div',
      'form__footer',
      formEl,
    );
    const formBtnsEl = RegisrationView.buildNode(
      'div',
      'form__btns',
      formFooterEl,
    );
    this.addBtnEl = RegisrationView.buildNode(
      'button',
      'form__btn btn btn_add',
      formBtnsEl,
    ) as HTMLButtonElement;
    this.addBtnEl.innerHTML = 'add user';
    this.addBtnEl.disabled = true;
    this.cancelBtnEl = RegisrationView.buildNode(
      'button',
      'form__btn btn btn_cancel',
      formBtnsEl,
    ) as HTMLButtonElement;
    this.cancelBtnEl.innerHTML = 'cancel';
  }

  /* Form */
  show(): void {
    const wrapperEl = document.querySelector('.wrapper');
    wrapperEl.appendChild(this.coverEl);
  }

  hide(): void {
    const wrapperEl = document.querySelector('.wrapper');
    if (wrapperEl.contains(this.coverEl)) wrapperEl.removeChild(this.coverEl);
  }

  coverClickBind(callBack: () => void): void {
    this.coverEl.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target && !target.closest('.form')) callBack();
    });
  }

  clearInputs(): void {
    this.firstNameEl.value = '';
    this.firstNameEl.dispatchEvent(new Event('input'));
    this.lastNameEl.value = '';
    this.lastNameEl.dispatchEvent(new Event('input'));
    this.emailEl.value = '';
    this.emailEl.dispatchEvent(new Event('input'));
  }

  /* Input */
  private static fieldInputBind(
    field: HTMLInputElement,
    callBack: (value: string) => void,
  ): void {
    field.addEventListener('input', () => callBack(field.value));
  }

  firstNameInputBind(callBack: (value: string) => void): void {
    RegisrationView.fieldInputBind(this.firstNameEl, callBack);
  }

  lastNameInputBind(callBack: (value: string) => void): void {
    RegisrationView.fieldInputBind(this.lastNameEl, callBack);
  }

  emailInputBind(callBack: (value: string) => void): void {
    RegisrationView.fieldInputBind(this.emailEl, callBack);
  }

  /* Invalid */
  private static markFieldAsInvalid(field: HTMLElement) {
    field.classList.remove('default');
    field.classList.remove('valid');
    field.classList.add('invalid');
  }

  markFirstNameAsInvalid(error: string): void {
    RegisrationView.markFieldAsInvalid(this.formMarkFirstNameEl);
    this.formMarkFirstNameEl.title = error;
    this.firstNameEl.title = error;
  }

  markLastNameAsInvalid(error: string): void {
    RegisrationView.markFieldAsInvalid(this.formMarkLastNameEl);
    this.formMarkLastNameEl.title = error;
    this.lastNameEl.title = error;
  }

  markEmailAsInvalid(error: string): void {
    RegisrationView.markFieldAsInvalid(this.formMarkEmailEl);
    this.formMarkEmailEl.title = error;
    this.emailEl.title = error;
  }

  /* Valid */
  private static formMarkFieldAsValid(field: HTMLElement) {
    field.classList.remove('default');
    field.classList.remove('invalid');
    field.classList.add('valid');
  }

  markFirstNameAsValid(): void {
    RegisrationView.formMarkFieldAsValid(this.formMarkFirstNameEl);
  }

  markLastNameAsValid(): void {
    RegisrationView.formMarkFieldAsValid(this.formMarkLastNameEl);
  }

  markEmailAsValid(): void {
    RegisrationView.formMarkFieldAsValid(this.formMarkEmailEl);
  }

  /* Btn */
  addBtnClickBind(callBack: () => void): void {
    this.addBtnEl.addEventListener('click', () => callBack());
  }

  cancelBtnClickBind(callBack: () => void): void {
    this.cancelBtnEl.addEventListener('click', () => callBack());
  }

  disableAddBtn(): void {
    this.addBtnEl.disabled = true;
  }

  enableAddBtn(): void {
    this.addBtnEl.disabled = false;
  }

  /* AVATAR */
  avatarChangeBind(callBack: () => void): void {
    this.avatarInputEl.addEventListener('change', () => callBack());
  }

  getAvatarFile(): File {
    return this.avatarInputEl.files[0];
  }

  setAvatarImage(src: string): void {
    this.avatarImgEl.src = src;
  }

  getAvatarImgEl(): HTMLImageElement {
    return this.avatarImgEl;
  }

  static resizeAvatar(fileSrc: string, callBack: (src: string) => void): void {
    const canvas = document.createElement('canvas');
    canvas.width = 120;
    canvas.height = 120;
    const img = new Image();
    img.src = fileSrc;
    img.onload = () => {
      const ctx = canvas.getContext('2d');
      const k = img.width / img.height;
      ctx.drawImage(img, 0, 0, 120, 120 / k);

      const resizedAvatarImg = canvas.toDataURL('image/png');
      callBack(resizedAvatarImg);
    };
  }
}
