import React, { FC } from 'react';
import { View, Image } from 'react-native';
import {
  Content,
  Spinner,
  CardItem,
  Text,
} from 'native-base';

const AlbumBody: FC<any> = ({ album, index, pictureList }) => {
  return (
    <>
      <CardItem cardBody>
        <Content horizontal={true}>
          {pictureList.length !== 0 ? <Image
            source={{uri:  pictureList[index][0]}}
            style={{height: 200, width: 350, flex: 1}}
          /> : <Spinner color='blue'/>}
          {pictureList.length !== 0 ? <Image
            source={{uri:  pictureList[index][1]}}
            style={{height: 200, width: 350, flex: 1}}
          /> : <Spinner color='blue'/>}
        </Content>
      </CardItem>
      <View style={{padding: 10}}>
        <Text>{album.note}</Text>
      </View>
    </>
  )
};

export default AlbumBody;