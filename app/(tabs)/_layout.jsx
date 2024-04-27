import React from 'react'
import {Tabs} from "expo-router";
import {AntDesign, FontAwesome5, Ionicons} from "@expo/vector-icons";

function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name={"index"} options={{
                headerTitle: "상품",
                title: "상품",
                tabBarIcon: ({color, size}) => (
                    <FontAwesome5 name="shopify" size={size} color={color}/>)
            }}/>
            <Tabs.Screen name={"products/[id]"} options={{
                headerTitle: "상품",
                title: "상품",
                tabBarIcon: ({color, size}) => (
                    <FontAwesome5 name="shopify" size={size} color={color}/>)
            }}/>
        </Tabs>
    )
}

export default TabsLayout
