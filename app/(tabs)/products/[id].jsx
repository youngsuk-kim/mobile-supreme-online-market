import {View, Text} from "react-native";
import {useLocalSearchParams} from "expo-router";

export default function ProductPage() {
    const {id} = useLocalSearchParams()

    return (
        <View>
            <Text>
                Product Page id - {id}
            </Text>
        </View>
    )
}
