import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";
import WebView from "react-native-webview";
import injectedOption from "./src/utils/injectedOption";
import HtmlWeb from "./src/utils/HtmlWeb";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.setNewOption = this.setNewOption.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.option !== this.props.option) {
      this.refs.chart.reload();
    }
  }

  setNewOption(option) {
    this.refs.chart.postMessage(JSON.stringify(option));
  }

  onMessage(event) {
    this.props.onPress ? this.props.onPress(event.nativeEvent.data) : null;
  }

  render() {
    return (
      <View style={{ flex: 1, height: this.props.height || 400 }}>
        <WebView
          textZoom={100}
          ref="chart"
          scrollEnabled={true}
          injectedJavaScript={injectedOption(this.props)}
          style={{
            height: this.props.height || 400,
            backgroundColor: this.props.backgroundColor || "transparent"
          }}
          scalesPageToFit={Platform.OS !== "ios"}
          originWhitelist={["*"]}
          source={{ html: HtmlWeb }}
          onMessage={this.onMessage.bind(this)}
        />
      </View>
    );
  }
}
