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
  Alert
} from 'react-native';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/action';
import { NativeModules } from 'react-native';

const { EmulatorCheck } = NativeModules;

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    };
  }
  componentDidMount() {
    EmulatorCheck.isEmulator().then((value) => {
      if (value) {
        Alert.alert('Running on Emulator')
      }
      else {
        Alert.alert('Running on Simulator')
      }
    })
  }
  onChangeText = (text) => {
    this.setState({ userName: text })
  }

  onPress = () => {
    if(this.state.userName!==''){
    this.props.countAction(this.state.userName)
    this.props.navigation.navigate('ButtonScreen')
  }
  else{
    Alert.alert('Field is Empty')
  }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{'Welcome Please enter your name'}</Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => this.onChangeText(text)}
          value={this.state.userName}
          placeholder={'Please Enter your username'}
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
          <Text style={{ color: 'white' }}>{'Submit'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aqua'
  },
  textCenter: {
    textAlign: 'center',
    color: 'red'
  },
  textInputStyle: {
    height: 40,
    width: '90%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonStyle: { height: '7%', width: '80%', alignItems: 'center', backgroundColor: 'black', justifyContent: 'center' }
});

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
  return {
    countAction: (username) => { dispatch(actions.userName(username)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)