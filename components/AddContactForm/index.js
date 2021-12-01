import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles  from "./styles";

const AddContacForm = ({guardarContacto}) => {

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mail, setMail] = useState('');

    return (
        <View>
            <Text style={styles.text}>Add Contact Form</Text>
            <TextInput style={styles.input} value={nombre} placeholder={'Nombre'} onChangeText={(text)=> setNombre(text)}/>
            <TextInput style={styles.input} value={telefono} placeholder={'Telefono'} onChangeText={(text)=> setTelefono(text)}/>
            <TextInput style={styles.input} value={mail} placeholder={'Mail'} onChangeText={(text)=> setMail(text)}/>
            <Button title={'Guardar'} onPress={()=>guardarContacto({nombre, telefono})}/>
        </View>
    );
}

export default AddContacForm;