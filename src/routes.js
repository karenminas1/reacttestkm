
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import SignUp from './components/Sign-up/Sign-up';
import SignIn from './components/Sign-in/Sign-in';

export const LANDING = '/';
export const SIGN_UP = '/signup';
export const SIGN_IN = '/signin';
export const HOME = '/home';
export const ACCOUNT = '/account';
export const ADMIN = '/admin';
export const PASSWORD_FORGET = '/pw-forget';


export  const routes = [
  {
    path: "/",
    exact: true,
    name: 'Landing',
    component: Landing
  },
  {
    path: "/home",
    exact: false,
    name: 'Home',
    component: Home
  },
  {
    path: "/signup",
    exact: false,
    name: "Sign Up",
    component: SignUp
  },
  {
    path: "/signin",
    exact: false,
    name: "Sign In",
    component: SignIn
  }
];