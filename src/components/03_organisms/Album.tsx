import React, { FC } from 'react';
import { Card } from 'native-base';

import AlbumHeader from '../02_molecules/AlbumHeader';
import AlbumBody from '../02_molecules/AlbumBody';
import AlbumFooter from '../02_molecules/AlbumFooter';

const Album: FC<any> = ({ album, index, pictureList }) => {
  return (
    <Card>
      <AlbumHeader album={album} />
      <AlbumBody album={album} index={index} pictureList={pictureList} />
      <AlbumFooter album={album} />
    </Card>
  )
};

export default Album;