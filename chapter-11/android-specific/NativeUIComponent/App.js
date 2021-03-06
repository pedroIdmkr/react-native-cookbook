import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from './components/Button';

export default class App extends Component {
  state = {
    count: 0
  }

  onButtonTap = () => {
    this.setState({
      count : this.state.count + 1
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button buttonText="Press Me!"
          onTap={this.onButtonTap}
          style={styles.button}
        />
        <Text>
          Button Pressed Count: {this.state.count}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    height: 40,
    width: 150
  }
});
