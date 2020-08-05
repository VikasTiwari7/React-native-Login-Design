
import React from 'react';
import { Image, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../Splash';
import LoginScreen from "../Login";
import RegisterScreen from '../Register'

// navigation stack
const AppStack = createStackNavigator(
    {
        Splash: {
            screen: SplashScreen,
            navigationOptions: {
                header: null,
            },
        },
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null,
            },
        },
        Register: {
            screen: RegisterScreen,
            navigationOptions: {
                header: null,
            },
        },


    },
    {
        initialRouteName: 'Splash',
    },
);

//

const Routes = createAppContainer(
    createSwitchNavigator({
        App: AppStack,
    }),
);
export default Routes;