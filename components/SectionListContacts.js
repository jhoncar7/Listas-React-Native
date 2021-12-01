import { SectionList, Text, View } from "react-native"
import React from "react";
import Row from "./Row";

const renderItem = ({item}) => <Row contact={item} />
const renderSectionHeader = ({section}) => (
    <View>
        <Text>{section.title}</Text>
    </View>
)

export default ({contacts})=>{

    const constactsByLetter = contacts.reduce((obj, contact)=>{
        console.log(obj);
        console.log(contact);

        const firstLetter = contact.nombre[0]
        return {
            ...obj,[firstLetter]: [...(obj[firstLetter] || []), contact]     
        }
    },{})

    console.log(constactsByLetter);

    const sections = Object.keys(constactsByLetter).map(letter=>{
        return {
            title: letter,
            data: constactsByLetter[letter]
        }
    })

    /* const sections=[
        {
            title: 'F',
            data:[
                {id:1,nombre:'facu',telefono:'123456789'},
                {id:2,nombre:'fff',telefono:'123456789'}
            ]
        },
        {
            title: 'C',
            data:[
                {id:3,nombre:'carlos',telefono:'123456789'},
                {id:4,nombre:'caro',telefono:'123456789'}
            ]
        }
    ] */

    return(
        <SectionList
            sections={sections}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}