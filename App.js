import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import contactsList from './utils/contacts'
import constanteExpo from "expo-constants";
import ScrollViewContact from "./components/ScrollViewContact";
import FlatListContact from './components/FlatListContact';
import SectionListContacts from './components/SectionListContacts';
import AddContacForm from './components/AddContactForm';

//console.log(contacts);

export default function App() {

  const [contacts, setContacts] = useState(contactsList);
  const [showForm, setFlag] = useState(false);

  const guardarContacto = ({nombre, telefono}) => {
    setContacts([
      ...contacts,
      {
        id: Math.random().toString(),
        nombre,
        telefono
      }
    ]);
    setFlag(prev => !prev);
  }

  return (
    <View style={styles.container}>
      {
        showForm ?
          <AddContacForm guardarContacto={guardarContacto}/>
          :
          <View>
            <Button title="Agregar Contacto" onPress={() => setFlag(prev => !prev)} />
            <Text>Listados de Contactos {(!constanteExpo.platform.ios) ? "Android" : "IOS"}</Text>
            {/* <ScrollViewContact contacts={contacts}/> */}
            {/* <FlatListContact contacts={contacts}/> */}
            <SectionListContacts contacts={contacts} />
          </View>
      }

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
