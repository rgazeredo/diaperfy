import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Login extends Component<{}> {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    <Image source={require("./../../assets/images/logo.png")}
                        style={{ width: SCREEN_WIDTH * 0.60 }}
                        resizeMode="contain"/>
                </View>
                <View style={{ flex: 1, marginTop: 100 }}>
                    <Button
                        buttonStyle={{
                            borderRadius: 20,
                            paddingHorizontal: 10,
                            backgroundColor: '#4267B2'
                        }}
                        text="Login with Facebook"/>
                </View>
            </View>
        )
    }
}
