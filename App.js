import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import contacts from './utils/contacts'
import constanteExpo from "expo-constants";
import ScrollViewContact from "./components/ScrollViewContact";
import FlatListContact from './components/FlatListContact';
import SectionListContacts from './components/SectionListContacts';

//console.log(contacts);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Listados de Contactos {(!constanteExpo.platform.ios) ? "Android": "IOS"}</Text>
      {/* <ScrollViewContact contacts={contacts}/> */}
      {/* <FlatListContact contacts={contacts}/> */}
      <SectionListContacts contacts={contacts}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: constanteExpo.statusBarHeight,//es porque SE MEZCLAN CON EL STATUS BAR DE LA HORA
  },
});
