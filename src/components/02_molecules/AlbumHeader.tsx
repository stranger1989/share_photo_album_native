import React, { FC } from 'react';
import {
  Left,
  CardItem,
  Body,
  Text,
  Thumbnail,
} from 'native-base';

const AlbumHeader: FC<any> = ({ album }) => {
  return (
    <CardItem>
      <Left>
        <Thumbnail source={require('../../../assets/logo192.png')} />
        <Body>
          <Text>{album.title}</Text>
          <Text note>{album.createdAt}</Text>
        </Body>
      </Left>
    </CardItem>
  )
};

export default AlbumHeader;