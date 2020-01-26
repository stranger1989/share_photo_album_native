import React, { FC, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
  Container,
  Content,
  Spinner
} from 'native-base';

import { Storage } from 'aws-amplify';

import * as AuthActions from '../actions/Auth';
import * as albumActions from '../actions/Album';

import HeaderComponent from '../components/03_organisms/Header';
import AlbumComponent from '../components/03_organisms/Album';

const mapStateToProps = (state: any): any => ({
  albumState: state.album,
});

const mapDispatchToProps = (dispatch: Dispatch): any => {
  return {
    albumActions: bindActionCreators(albumActions, dispatch),
    authActions: bindActionCreators(AuthActions, dispatch),
  };
};

const HomeScreen: FC<any> = ({ authActions, albumState, albumActions, navigation }) => {
  const [pictureList, setPictureList] = useState([]);

  useEffect(() => {
    (async () => {
      await authActions.fetchSessionData(true);
      await albumActions.getAlbumListFunc();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const pictureURL = await Promise.all(albumState.albums.map(async album => {
        return Promise.all(album.picture.map(async pictureTile => {
          return Storage.get(pictureTile.file.key, { level: 'public' });
        }));
      }));
      setPictureList([...pictureURL]);
    })();
  }, [albumState]);

  return (
    <>
      <Container>
        <HeaderComponent navigation={navigation} />
        {!albumState.isLoaded ?
          <Spinner color='blue' /> :
          <Content padder>
            {albumState.albums.map((album: any, index: number) =>
              <AlbumComponent album={album} index={index} pictureList={pictureList} />)}
          </Content>}
      </Container>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);