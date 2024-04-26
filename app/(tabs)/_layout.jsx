import React from 'react'
import {Tabs} from "expo-router";
import {AntDesign, FontAwesome5, Ionicons} from "@expo/vector-icons";

function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name={"index"} options={{
                headerTitle: "Home",
                title: "Home",
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="home" size={size} color={color}/>
                )
            }}/>
            <Tabs.Screen name={"products/[id]"} options={{
                headerTitle: "Product",
                title: "Product",
                tabBarIcon: ({color, size}) => (
                    <FontAwesome5 name="shopify" size={size} color={color}/>)
            }}/>
        </Tabs>
    )
}

export default TabsLayout
