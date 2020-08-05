import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
export default class Forgot extends Component {
    render() {
        return (

            <ImageBackground source={require('../assets/BG.png')} style={{
                height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'
            }} />

        );
    }
} 