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


class DetailsScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>{'Thank You For visiting our App'}</Text>
                <Text style={styles.textStyle}>{this.props.username}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aqua',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    textStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 32
    },
});

const mapStateToProps = state => ({
    username: state.userNameReducer.username,
});

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen)