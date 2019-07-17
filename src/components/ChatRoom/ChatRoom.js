import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ChatRoom extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.connection = new WebSocket('url')
  }

  componentDidMount() {
    this.connect()
  }

  connect = () => {
    this.connection.onopen = () => {
      console.log('connected')
    }
  }
  
  render() {
    return (
      <View>
        <Text> ChatRoom </Text>
      </View>
    )
  }
}

export default ChatRoom