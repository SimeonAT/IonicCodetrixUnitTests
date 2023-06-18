import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import {vi} from 'vitest';
import {
  Auth,
  User,
  signOut,
} from 'firebase/auth';

import Dashboard from '../components/dashboard';
import {Context} from '../components/context';

const mockUser = {
  displayName: 'Max Rebo',
  photoURL: 'https://www.example.com',
} as User;

vi.mock('firebase/auth', () => {
  return {
    signOut: vi.fn(() => {}),
    getAuth: vi.fn(() => {
      return {} as Auth
    }),
  };
});

test('Name is displayed', async () => {
  render(
    <Context.Provider value={{
      user: mockUser,
      setUser: vi.fn(() => {}),
    }}>
      <Dashboard />
    </Context.Provider>
  );

  await waitFor(() => {
    screen.getByText('Max Rebo');
  });
  return;
});

test('User\'s photo is shown', async () => {
  render(
    <Context.Provider value={{
      user: mockUser,
      setUser: vi.fn(() => {}),
    }}>
      <Dashboard />
    </Context.Provider>
  );

  await waitFor(() => {
    screen.getByAltText('profile picture');
  });
  return;
});

test('No profile picture', async () => {
  render(
    <Context.Provider value={{
      user: {
        photoURL: null,
      } as User,
      setUser: vi.fn(() => {}),
    }}>
      <Dashboard />
    </Context.Provider>
  );

  await waitFor(() => {
    screen.getByAltText('profile picture');
  });
  return;
});

test('User logs out', async () => {
  render(
    <Context.Provider value={{
      user: mockUser,
      setUser: vi.fn(() => {}),
    }}>
      <Dashboard />
    </Context.Provider>
  );

  fireEvent.click(
    screen.getByText('Log out')
  );

  await waitFor(() => {
    expect(signOut).toHaveReturned();
  });

  return;
});

test('No Dashboard shown if no context', async () => {
  render(
    <Context.Provider value={null}>
      <Dashboard />
    </Context.Provider> 
  );
  return;
});