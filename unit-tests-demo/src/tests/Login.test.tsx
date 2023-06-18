import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import {vi} from 'vitest';
import {
  signInWithCredential,
  Auth,
  User
} from 'firebase/auth';
import * as codetrix from '@codetrix-studio/capacitor-google-auth';

import Login from '../components/login';
import {Context} from '../components/context';

vi.mock('@codetrix-studio/capacitor-google-auth', () => {
  const mockCodetrixUser = {
    authentication: {
      idToken: "test token",
    }
  } as codetrix.User

  return {
    GoogleAuth: {
      signIn: vi.fn(() => {
        return Promise.resolve(mockCodetrixUser);
      }),
    },
  };
});

vi.mock('firebase/auth', () => {
  return {
    GoogleAuthProvider: {
      credential: vi.fn((idToken: string) => idToken),
    },
    signInWithCredential: vi.fn(() => {}),
    getAuth: vi.fn(() => {
      return {} as Auth
    }),
  };
});

test('Oauth login failure', async () => {
  window.alert = vi.fn(() => {});

  render(
    <Context.Provider value={{
      user: null,
      setUser: vi.fn(() => {}),
    }}>
      <Login />
    </Context.Provider>
  );

  fireEvent.click(
    screen.getByText('OAuth Login')
  );

  await waitFor(() => {
    expect(window.alert).toHaveBeenCalled();
  });

  return;
});

test('Successful OAuth Login', async () => {
  const mockSetUser = vi.fn(() => {});

  render(
    <Context.Provider value={{
      user: null,
      setUser: mockSetUser,
    }}>
      <Login />
    </Context.Provider>
  );

  fireEvent.click(
    screen.getByText('OAuth Login')
  );

  await waitFor(() => {
    expect(signInWithCredential).toHaveReturned();
  });

  return;
});

test('When a user is already logged in', () => {
  render(
    <Context.Provider value={{
      user: {} as User,
      setUser: vi.fn(() => {}),
    }}>
      <Login />
    </Context.Provider>
  );

  return;
});