import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
export default class Register extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <ImageBackground source={require('../assets/BG.png')} style={{
                height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'
            }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                    <Image source={require('../assets/log.png')} style={{
                        height: 120, width: 120

                    }}></Image>
                </View>
                <View style={{ width: '90%', backgroundColor: 'white', borderRadius: 20, }}>



                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '8%' }}>
                        <Image source={require('../assets/Sign.png')} style={{
                            height: 20,
                            width: 100
                        }}></Image>
                    </View>
                    <View style={{
                        flexDirection: 'row', margin: '2%',
                        backgroundColor: '#f3f3f3', borderRadius: 20, width: "90%", alignSelf: "center", marginTop: 15
                    }}>
                        <View style={{ width: '15%' }}>

                            <Image source={require('../assets/emailicon.png')} style={{
                                height: 20, width: 20, top: 10, marginLeft: 5, top: 15,
                                justifyContent: 'center', alignItems: 'center',

                            }}></Image>
                        </View>
                        <View style={{ width: '70%' }}>
                            <TextInput placeholder='E-Mail'
                                style={{ borderRadius: 20, }}>

                            </TextInput>
                        </View>

                    </View>
                    <View style={{
                        flexDirection: 'row', margin: '2%',
                        backgroundColor: '#f3f3f3', borderRadius: 20, width: "90%", alignSelf: "center", marginTop: 15
                    }}>
                        <View style={{ width: '15%' }}>

                            <Image source={require('../assets/user.png')} style={{
                                height: 20, width: 20, top: 10, marginLeft: 5, top: 15,
                                justifyContent: 'center', alignItems: 'center',

                            }}></Image>
                        </View>
                        <View style={{ width: '70%' }}>
                            <TextInput placeholder='Username'
                                style={{ borderRadius: 20, }}>

                            </TextInput>
                        </View>

                    </View>
                    <View style={{
                        flexDirection: 'row', margin: '2%',
                        backgroundColor: '#f3f3f3', borderRadius: 20, width: "90%", alignSelf: "center", marginTop: 15
                    }}>
                        <View style={{ width: '15%' }}>

                            <Image source={require('../assets/passwordicon.png')} style={{
                                height: 20, width: 20, top: 10, marginLeft: 5, top: 15,
                                justifyContent: 'center', alignItems: 'center',

                            }}></Image>
                        </View>
                        <View style={{ width: '70%' }}>
                            <TextInput placeholder='Password'
                                style={{ borderRadius: 20, }}>

                            </TextInput>
                        </View>
                        <View>
                            <Image source={require('../assets/CP.png')} style={{
                                height: 20, width: 20, marginLeft: 5, top: 18,
                                justifyContent: 'center', alignItems: 'center',

                            }}></Image>
                        </View>

                    </View>
                    <View style={{
                        flexDirection: 'row', margin: '1%',
                        backgroundColor: '#f3f3f3', borderRadius: 20, width: "90%", alignSelf: "center", marginTop: 15
                    }}>
                        <View style={{ width: '15%' }}>

                            <Image source={require('../assets/passwordicon.png')} style={{
                                height: 20, width: 20, top: 10, marginLeft: 5, top: 15,
                                justifyContent: 'center', alignItems: 'center',
                                marginLeft: 5,
                            }}></Image>
                        </View>
                        <View style={{ width: '70%' }}>
                            <TextInput placeholder='Confirmed Password'
                                style={{ borderRadius: 20, }}>

                            </TextInput>
                        </View>
                        <View>
                            <Image source={require('../assets/CP.png')} style={{
                                height: 20,
                                justifyContent: 'center', alignItems: 'center', width: 20, top: 18,
                                marginLeft: 5,
                            }}></Image>
                        </View>

                    </View>
                    <TouchableOpacity>
                        <View style={{
                            backgroundColor: "#ff6c63", borderRadius: 20,
                            width: "90%", alignSelf: "center", marginTop: 15,
                            alignItems: 'center', justifyContent: "center", height: 40
                        }}>

                            {/* <Image source={require('../assets/Signup.png')}
                                style={{
                                    height: 28, width: 82,
                                    justifyContent: "center", alignSelf: 'center',
                                }}>

                            </Image> */}
                            <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>SignUp</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <Image source={require('../assets/Acnt.png')} style={{
                            height: 10, width: 140
                        }}>

                        </Image>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                        <View style={{
                            backgroundColor: "#ff6c63", borderRadius: 20,
                            width: "90%", alignSelf: "center", marginTop: 15,
                            alignItems: 'center', justifyContent: "center", height: 40, marginBottom: 10
                        }}>

                            {/* <Image source={require('../assets/Signup.png')}
                                style={{
                                    height: 28, width: 82,
                                    justifyContent: "center", alignSelf: 'center',
                                }}>

                            </Image> */}
                            <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>Login</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </ImageBackground >
        )

    }
} 