import { Text, View, FlatList } from "react-native"
import React from "react";
import Row from "./Row";

export default ({contacts}) => (
    <FlatList data={contacts} 
    renderItem={({item})=>{
        return <Row contact={item}/>
    }}
    keyExtractor={item=>item.id.toString()}/>
)