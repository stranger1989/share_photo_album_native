import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["Home", "Add", "Account"];

const SideBar: React.FC<any> = ({navigation}) => {
  return (
    <Container>
      <Content>
        <Image
          source={require('../../assets/splash.png')}
          resizeMode='cover'
          style={{
            width: '100%',
            height: 200,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            flex: 1
          }}>
        </Image>
        <List
          dataArray={routes}
          renderRow={data => {
            return (
              <ListItem
                button
                onPress={() => navigation.navigate(data)}
              >
                <Text>{data}</Text>
              </ListItem>
            );
          }}
        />
      </Content>
    </Container>
  );
}

export default SideBar;