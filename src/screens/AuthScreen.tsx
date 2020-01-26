import React, { FC, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Hub } from 'aws-amplify';
import { Authenticator } from 'aws-amplify-react-native';
import * as Font from 'expo-font';

import * as AuthActions from '../actions/Auth';

const mapStateToProps = (state: any): any => ({
  authState: state.auth,
});

const mapDispatchToProps = (dispatch: Dispatch): any => {
  return {
    authActions: bindActionCreators(AuthActions, dispatch),
  };
};

const AuthScreen: FC<any> = ({ authActions, authState, navigation }) => {
  const [triggerFetch, setTriggerFetch] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        Roboto: require("../../node_modules/native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("../../node_modules/native-base/Fonts/Roboto_medium.ttf"),
      });
      setIsReady(true);
    })();
  }, []);

  useEffect(() => {
    const onAuthEvent = (payload: any): void => {
      switch (payload.event) {
        case 'signIn':
          setTriggerFetch(true);
          navigation.navigate('Home');
          break;
        case 'signOut':
          setTriggerFetch(false);
          navigation.navigate('Auth');
          break;
        default:
      }
    };

    const HubListener = (): void => {
      Hub.listen('auth', data => {
        const { payload } = data;
        onAuthEvent(payload);
      });
    };

    HubListener();
    authActions.fetchSessionData();

    return (): void => {
      Hub.remove('auth', () => {});
    };
  }, [triggerFetch]);

  return (
    isReady ? <Authenticator /> : null
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthScreen);