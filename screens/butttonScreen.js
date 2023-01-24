/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/action';
import Slider from 'react-native-slide-to-unlock';


class ButtonScreen extends React.Component {

    onPressButton = () => {
        this.props.navigation.navigate('DetailsScreen')
    }

    render() {
        return (
            <>
                <View style={styles.textContainer}>
                    <Text style={styles.topText}>{'Hi' + ' ' + this.props.username}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.buttonTextStyle}>{'4 varaiations of button'}</Text>
                    <TouchableOpacity style={styles.viewStyle} onPress={this.onPressButton}>
                        <Text style={styles.buttonStyle}>{'Press Me'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewStyle2} onPress={this.onPressButton}>
                        <View>
                            <Text style={styles.buttonStyle}>{'Press Me'}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewStyle3} onPress={this.onPressButton}>
                        <View>
                            <Text style={styles.buttonStyle2}>{'Press Me'}</Text>
                        </View>
                    </TouchableOpacity>
                    <Slider
                        childrenContainer={styles.sliderColor}
                        onEndReached={this.onPressButton}
                        containerStyle={styles.sliderStyle}
                        sliderElement={
                            <Image
                                style={styles.imageStyle}
                                source={{
                                    uri:
                                        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Diamond_Flat_Icon_Vector.svg/2048px-Diamond_Flat_Icon_Vector.svg.png',
                                }}
                            />
                        }
                    >
                        <Text style={{ color: '#6cb3f4' }}>{'SLIDE TO UNLOCK'}</Text>
                    </Slider>
                </View>
            </>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    textCenter: {
        textAlign: 'center'
    },
    viewStyle: {
        borderRadius: 5,
        height: 50,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    viewStyle2: {
        borderRadius: 5,
        height: 50,
        width: '90%',
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    viewStyle3: {
        borderRadius: 5,
        height: 50,
        width: '90%',
        backgroundColor: '#6cb3f4',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    imageStyle: {
        width: 50,
        margin: 4,
        borderRadius: 5,
        height: 50,
        backgroundColor: '#6cb3f4',
    },
    buttonStyle: { color: '#6cb3f4', fontWeight: 'bold' },
    textContainer: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
    },
    buttonTextStyle: { color: 'yellow', fontSize: 20 },
    sliderStyle: {
        margin: 8,
        backgroundColor: 'black',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    buttonStyle2: { color: 'white', fontWeight: 'bold' },
    topText: { color: 'white', fontSize: 24 },
    sliderColor: { backgroundColor: 'black' }
});

const mapStateToProps = state => ({
    username: state.userNameReducer.username,
});

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonScreen)