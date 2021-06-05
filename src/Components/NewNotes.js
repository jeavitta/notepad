import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import *as DocumentPicker from 'expo-document-picker';
import { MaterialIcons } from '@expo/vector-icons';

import Note from './note';

export default class NewNotes extends React.Component {

    state = {
        noteArray: [],
        noteText: '',
        image: null,
        pickImage: "",

    }

    
    pickfromgallery = async () => {
        let permissionResult = await DocumentPicker.getDocumentAsync({});

        if (permissionResult.granted === false) {
            alert('you need to give up permission to work');
            return;
        }

        this.setState({ image: permissionResult.uri });
    };
    render() {

        Let: notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val} deleteMethod={() => this.deleteNote(key)}
                pickImage={<Image
                    source={{ uri: this.state.image }}
                    style={styles.thumbnail}
                />} />
        });


        return (

            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end", marginTop: 40 }}>
                    <View style={{ marginRight: 10 }}>
                        <TouchableOpacity onPress={this.pickfromgallery}>
                            <AntDesign name="paperclip" size={24} color="#010b65" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginRight: 10 }}>
                        <TouchableOpacity onPress={this.addNote.bind(this)} >
                            <Text style={styles.addButtomText}>Save</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <ScrollView style={styles.scrollContainer}>
                    {notes}
                    <Image
                        source={{ uri: this.state.image }}
                        style={styles.thumbnail}
                    />
                </ScrollView>

                <View style={styles.searchSection}>
                    <View style={{ width: "80%" }}>
                        <TextInput multiline autoFocus={true} selectionColor="#fff"
                            onChangeText={(noteText) => this.setState({ noteText })}
                            value={this.state.noteText}
                            placeholder='write your note here.....'
                            placeholderTextColor='white' underlineColor='transparent'
                            style={{ color: '#fff' }} />
                    </View>
                    <View style={{ width: "10%" }}>
                        <TouchableOpacity onPress={this.pickfromgallery}>
                            <AntDesign name="paperclip" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "10%" }}>
                        <TouchableOpacity onPress={this.addNote.bind(this)} >
                            <MaterialIcons name="send" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
    addNote() {
        if (this.state.noteText) {
            var data = new Date();

            if (data.getMonth() <= 9) {
                var sep = "/0";
            }

            this.state.noteArray.push({ date: data.getDate() + sep + data.getMonth() + "/" + data.getFullYear(), 'note': this.state.noteText });
            this.setState({ 'noteArray': this.state.noteArray })
            this.setState({ 'noteText': '' });
        }
    }
    deleteNote(key) {
        this.state.noteArray.splice(key, 1);
        this.setState({ 'noteArray': this.state.noteArray });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#a3b9fe',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
    },
    headerText: {
        color: '#010b65',
        fontSize: 18,
        padding: 26,
    },
    scrollContainer: {
        //flex: 1,
        //marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
    },
    addButtom: {
        backgroundColor: '#a3b9fe',
        width: 90,
        height: 90,
        borderRadius: 50,
        borderBottomColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        marginBottom: -45,
        zIndex: 10,
    },
    addButtomText: {
        color: '#010b65',
        fontSize: 20,
    },
    textInput: {
        //alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        //paddingTop: 46,
        backgroundColor: '#010b65',
        borderTopWidth: 2,
        //borderTopColor: '#0C948A',
    },
    thumbnail: {
        width: 200,
        height: 100,
    },
    searchSection: {
        borderWidth: 1,
        borderColor: '#CCD0D5',
        padding: 10,
        //marginLeft: 40,
        //marginRight: 40,
        marginTop: 15,
        flexDirection: 'row',
        //borderRadius: 10,
        alignItems: "center",
        //alignSelf: 'stretch',
        // color: '#fff',
        padding: 20,
        //paddingTop: 46,
        backgroundColor: '#010b65',
        borderTopWidth: 2,
        //borderTopColor: '#0C948A',
    },

});