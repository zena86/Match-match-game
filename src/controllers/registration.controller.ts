import User from '../models/user.model';
import { IScoreService } from '../services/score.service';
import RegistrationView from '../views/registration.view';
import HeaderController from './header.controller';

export default class RegistrationController {
  private registrationView: RegistrationView;

  private headerController: HeaderController;

  private userModel: User;

  private scoreService: IScoreService;

  constructor(
    registrationView: RegistrationView,
    userModel: User,
    headerController: HeaderController,
    scoreService: IScoreService,
  ) {
    this.registrationView = registrationView;
    this.headerController = headerController;
    this.userModel = userModel;
    this.scoreService = scoreService;

    this.processFirstName();
    this.processLastName();
    this.processEmail();

    this.registrationView.addBtnClickBind(() => {
      this.headerController.prepareStartGame();
      this.headerController.setAvatar(this.userModel.avatar);
      this.registrationView.hide();
      this.scoreService.putUser(this.userModel);
    });

    this.registrationView.cancelBtnClickBind(() => {
      this.registrationView.clearInputs();
      this.validate();
    });

    this.registrationView.avatarChangeBind(() => {
      this.addAvatar();
    });

    this.registrationView.coverClickBind(() => {
      this.registrationView.hide();
    });
  }

  /* Form */
  show(): void {
    this.registrationView.show();
  }

  private validate() {
    const firstNameError = this.userModel.getFirstNameError();
    const lastNameError = this.userModel.getLastNameError();
    const emailError = this.userModel.getEmailError();

    if (firstNameError === '') {
      this.registrationView.markFirstNameAsValid();
    } else {
      this.registrationView.markFirstNameAsInvalid(firstNameError);
    }

    if (lastNameError === '') {
      this.registrationView.markLastNameAsValid();
    } else {
      this.registrationView.markLastNameAsInvalid(lastNameError);
    }

    if (emailError === '') {
      this.registrationView.markEmailAsValid();
    } else {
      this.registrationView.markEmailAsInvalid(emailError);
    }

    if (firstNameError === '' && lastNameError === '' && emailError === '') {
      this.registrationView.enableAddBtn();
    } else {
      this.registrationView.disableAddBtn();
    }
  }

  /* Input */
  private processFirstName() {
    this.registrationView.firstNameInputBind((value) => {
      this.userModel.firstName = value;
      this.validate();
    });
  }

  private processLastName() {
    this.registrationView.lastNameInputBind((value) => {
      this.userModel.lastName = value;
      this.validate();
    });
  }

  private processEmail() {
    this.registrationView.emailInputBind((value) => {
      this.userModel.email = value;
      this.validate();
    });
  }

  /* AVATAR */
  private addAvatar(): void {
    const file = this.registrationView.getAvatarFile();
    const reader = new FileReader();
    reader.onload = () => {
      const fileSrc = reader.result;
      RegistrationView.resizeAvatar(`${fileSrc}`, (resizedAvatarImg) => {
        this.registrationView.setAvatarImage(resizedAvatarImg);
        this.userModel.avatar = resizedAvatarImg;
      });
    };
    reader.readAsDataURL(file);
  }
}
