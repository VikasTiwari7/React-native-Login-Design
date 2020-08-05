import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
export default class Splash extends Component {
    componentDidMount() {
        this.timeoutHandle = setTimeout(() => {
            this.retrieveData();

        }, 2000);
    }
    retrieveData = () => {

        this.props.navigation.dispatch(
            StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Login' })]
            })
        );
        this.props.navigation.navigate('Welcome');
        console.log("sahil")
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };
    }
    componentWillUnmount() {
        clearTimeout(this.timeoutHandle);
    }
    render() {
        return (


            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../assets/BG1.png')}
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="cover">

                </ImageBackground>

            </View>

        );
    }
}