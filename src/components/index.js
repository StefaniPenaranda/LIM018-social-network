import { logIn, loginEvent, singInGmail } from './login.js';
// import { mainpage } from './principal.js';
import { register, signupEvent } from './register.js';
import {
  homePage, addHomePageEvents, getPosts, scrollHome,
} from './home.js';

const components = {
  Login: logIn,
  SignIn: loginEvent,
  SingInGmail: singInGmail,
  Register: register,
  AddSignUpEvents: signupEvent,
  Home: homePage,
  AddHomePageEvents: addHomePageEvents,
  Getposts: getPosts,
  ScrollHome: scrollHome,
  // Mainpage: mainpage,
};

export { components };
