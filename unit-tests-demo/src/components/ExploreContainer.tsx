import React from 'react';
import {User} from 'firebase/auth';

import './ExploreContainer.css';
import * as oauth from '../handlers/oauth';
import Dashboard from './dashboard';
import Login from './login';
import {Context} from './context';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [user, setUser] = React.useState<User | null>(null);

  oauth.initialize();

  return (
    <Context.Provider value = {{
      user: user,
      setUser: setUser,
    }}>
      <Login />
      <Dashboard />
    </Context.Provider>
  );
};

export default ExploreContainer;
