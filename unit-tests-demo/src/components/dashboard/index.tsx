import React from 'react';
import {
  IonAvatar,
  IonItem,
  IonLabel,
  IonButton,
} from '@ionic/react';

import * as oauth from '../../handlers/oauth';
import {Context} from '../context';

export default function Dashboard() {
  const context = React.useContext(Context);

  if ((context !== null) && (context.user !== null)) {
    return (
      <React.Fragment>
        <IonItem>
          <IonAvatar slot="start">
            <img alt="profile picture" src={oauth.getPhotoUrl(context.user)} />
          </IonAvatar>
          <IonLabel>
            {context.user?.displayName}
          </IonLabel>
        </IonItem>

        <IonButton onClick={() => {
          oauth.logoutHandler();
          context.setUser(null);
          return;
        }}>
          Log out
        </IonButton>
      </React.Fragment>
    );
  } else {
    return (null);
  }
}