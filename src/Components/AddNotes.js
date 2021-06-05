import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import NewNotes from "./NewNotes"
import notes from "./note"
const { width, height } = Dimensions.get("window");

const AddNotes = ({ navigation }) => {
    return (
        <View>
            <ScrollView >
                {notes}
            </ScrollView>
            <View style={{
                alignItems: "flex-end",
                // marginLeft:width-180 ,
                //position: 'absolute',
                //alignItems: 'center',
                bottom: 0,
                left: 0,
                right: 0,
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('NewNotes')} style={{
                    //backgroundColor: "#0C948A",
                    //height: 50, width: 50, borderRadius: 50,
                    marginTop: height - 96, justifyContent: "flex-end", alignItems: "flex-end"
                }}>
                    <MaterialIcons name="add-circle" size={74} color="#0C948A" style={{ elevation: 8 }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddNotes;