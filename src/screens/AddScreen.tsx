import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Field,reduxForm } from 'redux-form';
import { View, Image } from 'react-native';
import {
  Container,
  Content,
  Button,
  Text,
  Item,
  Input,
  Label,
  Picker,
  Icon,
} from 'native-base';

import HeaderComponent from '../components/03_organisms/Header';

const renderInput = ({ input, label, type, meta: { touched, error, warning } }) => {
  let hasError= false;
  if(error !== undefined){
    hasError= true;
  }

  return(
    <Item error= {hasError} fixedLabel>
      <Label>{label}</Label>
      <Input {...input}/>
      {hasError ? <Text>{error}</Text> : <Text />}
    </Item>
  )
}

const renderSelectField: React.FC<any> = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <>
    <Item picker>
      <Picker
        mode="dropdown"
        iosIcon={<Icon name="arrow-down" />}
        style={{ width: undefined }}
        placeholder="visible"
        placeholderStyle={{ color: "#bfc6ea" }}
        placeholderIconColor="#007aff"
        selectedValue={input.value}
        onValueChange={input.onChange}
      >
        {children}
      </Picker>
    </Item>
  </>
);

const DetailsScreen: React.FC<any> = (props) => {
  const [image, setImage] = useState('');

  const selectPicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: 1,
      allowsEditing: true,
    });
    if (!cancelled) setImage(uri);
  };

  const takePicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });
    setImage(uri);
  };

  return (
    <Container>
      <HeaderComponent navigation={props.navigation} />
      <Content padder style={{width: '100%'}}>
        <Field name="title" label="title" component={renderInput} />
        <View style={{height: 20, width: 350, flex: 1}}></View>
        <Field name="visible" label="visible" component={renderSelectField} >
          <Picker.Item label="public" value="public" />
          <Picker.Item label="private"  value="private" />
        </Field>
        <View style={{height: 20, width: 350, flex: 1}}></View>
        <Label>image</Label>
        <View style={{height: 10, width: 350, flex: 1}}></View>
        {image ? <Image source={{ uri: image }} style={{height: 180, width: 350, flex: 1}} /> :
        <View style={{
          borderWidth: 2,
          borderColor: "lightgrey",
          borderStyle: "dashed",
          height: 180,
          width: 350,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          }}>
          <Icon name='camera' style={{ color: "lightgrey" }} />
        </View>}
        <View style={{height: 10, width: 350, flex: 1}}></View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button block onPress={() => selectPicture()} style={{ width: '45%' }}>
            <Text>
              Gallery
            </Text>
          </Button>
          <Button block onPress={() => takePicture()} style={{ width: '45%' }}>
            <Text>
              Camera
            </Text>
          </Button>
        </View>
        <Field name="memo" label="memo" component={renderInput} />
        <View style={{height: 20, width: 350, flex: 1}}></View>
        <Button block onPress={() => {}}>
          <Text>
            Submit
          </Text>
        </Button>
      </Content>
    </Container>
  );
};

export default reduxForm({
  form: 'form',
})(DetailsScreen)