import React, { FC } from 'react';
import {
  Left,
  CardItem,
  Body,
  Text,
  Button,
  Icon,
  Right
} from 'native-base';

const AlbumFooter: FC<any> = ({ album }) => {
  return (
    <CardItem>
      <Left>
        <Button transparent>
          <Icon active name="thumbs-up" />
          <Text>12 Likes</Text>
        </Button>
      </Left>
      <Body>
        <Button transparent>
          <Icon active name="chatbubbles" />
          <Text>4 Comments</Text>
        </Button>
      </Body>
      <Right>
        <Text>{album.owner}</Text>
      </Right>
    </CardItem>
  )
};

export default AlbumFooter;