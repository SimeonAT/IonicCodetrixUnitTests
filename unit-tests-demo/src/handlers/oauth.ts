import * as codetrix from '@codetrix-studio/capacitor-google-auth';
import {
  GoogleAuthProvider,
  signInWithCredential,
  Auth,
  getAuth,
  User,
  UserCredential,
  signOut,
} from 'firebase/auth';

import {webConfig} from '../../env/codetrix';
import {app} from '../../env/env';

export function initialize() {
  codetrix.GoogleAuth.initialize(webConfig);
  return;
}

export async function loginHandler() {
  return await signIn(auth());
}

export async function logoutHandler() {
  signOut(auth());
  return;
}

export function getUserInfo(credentials: UserCredential) {
  return credentials.user;
}
export function getPhotoUrl(user: User | null): string {
  const exists = (user !== null) && (user.photoURL !== null);
  return (exists) ? user.photoURL : "";
}

function auth() {
  return getAuth(app);
}

function signIn(auth: Auth) {
  return codetrix.GoogleAuth.signIn()
    .then((user) => {
      return GoogleAuthProvider.credential(
        user.authentication.idToken
      );
    })
    .then((credentials) => {
      return signInWithCredential(auth, credentials);
    });
}
