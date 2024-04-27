import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Button, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Image } from 'expo-image';
import { Picker } from '@react-native-picker/picker';

export default function ProductPage() {
    const { id } = useLocalSearchParams();
    const [quantity, setQuantity] = useState(1);
    const [selectedOption, setSelectedOption] = useState("black");

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e7c9aadd-242a-4dd4-8509-6ddf9645525e/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EB%A0%88%ED%8A%B8%EB%A1%9C-%ED%95%98%EC%9D%B4-og-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-Nk3sFsOc.png" }}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>에어 조던 1 레트로 하이 OG</Text>
                <Text style={styles.price}>20,000원</Text>
                <Text style={styles.description}>
                    이 제품은 최고급 소재와 혁신적인 디자인을 조합하여 만들어진, 어떠한 환경에서도 편안함을 제공하는 스니커즈입니다.
                    전설적인 조던 스타일이 현대적인 감각과 만나 탄생했습니다.
                </Text>
                <Picker
                    selectedValue={selectedOption}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelectedOption(itemValue)}>
                    <Picker.Item label="색상: 블랙" value="black" />
                    <Picker.Item label="색상: 화이트" value="white" />
                </Picker>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))} style={styles.button}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.button}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
                <Button title="장바구니에 추가" onPress={() => console.log("장바구니에 추가!")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        flex: 0.5,
    },
    detailsContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        color: '#888',
    },
    description: {
        textAlign: 'center',
        marginVertical: 10,
    },
    picker: {
        width: '80%',
        height: 50,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityText: {
        fontSize: 18,
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 5,
    },
});
