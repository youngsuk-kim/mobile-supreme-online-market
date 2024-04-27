import * as React from 'react';
import { Card } from 'react-native-paper';
import { StatusBar, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/productApi';

export const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            setProducts(await fetchProducts());
        };

        getProducts();
    }, []);

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
            {products.map((product, key) => (
                <Card key={key} style={styles.card} onPress={() => {
                    router.push('products/1');
                }}>
                    <Card.Cover
                        source={{ uri: product.imageUrl }} />
                    <Card.Title
                        title={product.brandName}
                        subtitle={product.productName} />
                    <Card.Content>
                        <Text>{product.price}</Text>
                    </Card.Content>
                </Card>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0, // 플랫폼별 상태바 높이 만큼 여백 추가
    },
    contentContainer: {
        flexWrap: 'wrap', // 카드를 수평으로 배치하도록 설정
        flexDirection: 'row', // 방향을 행으로 설정
        justifyContent: 'space-around', // 카드 사이의 간격을 균등하게 분배
    },
    card: {
        flex: 1, // 카드가 가능한 공간을 균등하게 차지하도록 설정
        margin: 10, // 카드 주변에 공간을 추가
        minWidth: 150, // 카드의 최소 너비 지정
    },
});
