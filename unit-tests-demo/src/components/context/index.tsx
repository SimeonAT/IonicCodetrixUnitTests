import React from 'react';
import {User} from 'firebase/auth';

export interface UserContext {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const Context = React.createContext<UserContext | null>(null);