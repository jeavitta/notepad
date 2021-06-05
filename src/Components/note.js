import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class note extends React.Component {
  render() {
      return (
        <View key={this.props.keyval} style={styles.note}>

            <Text style={styles.noteText}>{this.props.val.date}</Text>
            <Text style={styles.noteText}>{this.props.val.note}</Text>
            <Text style={styles.noteText}>{this.props.pickImage}</Text>

            <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                <Text style={styles.noteDeleteText}>x</Text>
            </TouchableOpacity>

        </View>
      );
  }
}

const styles = StyleSheet.create({
    note:{
      position: 'relative',
      padding: 20,
      paddingRight: 100,
      borderWidth: 2,
      borderColor: '#ededed',
      borderRadius:10
    },
    noteText:{
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderLeftColor: '#E19E63',
    },
    noteDelete:{
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#010b65',

      padding: 10,
      top: 10,
      bottom: 10,
      right: 10,
    },
    noteDeleteText:{
      color: 'white',
    }
});