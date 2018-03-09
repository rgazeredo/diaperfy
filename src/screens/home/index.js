import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { 
    Tab, 
    Tabs, 
    TabHeading, 
    Icon,
    Card,
    CardItem,
    Left, 
    Thumbnail, 
    Body, 
} from 'native-base';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Login extends Component<{}> {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Tabs tabBarPosition="bottom">
                    <Tab heading={ <TabHeading style={{ flexDirection: 'column', paddingBottom: 10, paddingTop: 10 }}><Icon name="md-pricetags" style={{ margin: -4 }} /><Text>Promoções</Text></TabHeading>}>
                        <Card style={{flex: 0}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={{uri: 'Image URL'}} />
                                    <Body>
                                        <Text>NativeBase</Text>
                                        <Text note>April 15, 2016</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/>
                                    <Text>
                                        //Your text here
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent textStyle={{color: '#87838B'}}>
                                        <Icon name="logo-github" />
                                        <Text>1,926 stars</Text>
                                    </Button>
                                </Left>
                            </CardItem>
                        </Card>
                    </Tab>
                    <Tab heading={ <TabHeading style={{ flexDirection: 'column', paddingBottom: 10, paddingTop: 10 }}><Icon name="md-star" style={{ margin: -4 }} /><Text>Favoritos</Text></TabHeading>}>
                        <Text>TAB 1</Text>
                    </Tab>
                    <Tab heading={ <TabHeading style={{ flexDirection: 'column', paddingBottom: 10, paddingTop: 10 }}><Icon name="md-pin" style={{ margin: -4 }} /><Text>Estabelecimentos</Text></TabHeading>}>
                        <Text>TAB 1</Text>
                    </Tab>
                </Tabs>
            </View>
        )
    }
}
