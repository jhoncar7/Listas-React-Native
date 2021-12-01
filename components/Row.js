import { Text, StyleSheet, View } from "react-native"
import React from "react";

export default ({ contact }) => 
    (
        <View style={styles.row} id={contact.id}>
            <Text style={styles.text}>{contact.nombre} - {contact.telefono} - id={contact.id}</Text>
        </View>
    )

const styles = StyleSheet.create({
    row: {
        padding: 20,
    },
    text:{
        fontSize: 20,
    }
})