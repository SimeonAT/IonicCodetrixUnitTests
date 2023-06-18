import React from 'react';
import {IonButton} from '@ionic/react';

import * as oauth from '../../handlers/oauth';
import {Context} from '../context';

export default function Login(){
  const context = React.useContext(Context);

  if (context?.user === null) {
    return (
      <IonButton size="default" onClick={() => {
        oauth.loginHandler().then((user) => {
          context?.setUser(oauth.getUserInfo(user));
        })
        .catch((error) => {
          context?.setUser(null);
          console.error(error);
          window.alert('Login failed');
          return;
        });
      }}>
        OAuth Login
      </IonButton>
    );
  } else {
    return (null);
  }
}