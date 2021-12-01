import { ScrollView, Text, View } from "react-native"
import React from "react";
import Row from "./Row";


const ScrollViewContact = ({contacts})=>
//{
    //return
    (
    <ScrollView>
        {
            contacts.map((contact)=>{
                return(
                    <Row key={index} contact={contact.id}/>
                )
            })
        }
    </ScrollView>)
//}

export default ScrollViewContact;