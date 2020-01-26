import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
  Container,
  Content,
  Button,
  Text
} from 'native-base';
import * as AuthActions from '../actions/Auth';

import HeaderComponent from '../components/03_organisms/Header';

const mapStateToProps = (state: any): any => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch: Dispatch): any => {
  return {
    authActions: bindActionCreators(AuthActions, dispatch),
  };
};

const AccountScreen: React.FC<any> = ({ auth, authActions, navigation }) => {
  return (
    <Container>
      <HeaderComponent navigation={navigation} />
      <Content padder>
        <Text>{auth.user === null ? null : auth.user.username}</Text>
        <Button
          onPress={() => authActions.handleSignout()}
        >
        <Text> LogOut </Text>
        </Button>
      </Content>
    </Container>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountScreen);