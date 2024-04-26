import * as React from 'react';
import { Card } from 'react-native-paper';
import {StatusBar, Text, StyleSheet, View, Pressable} from "react-native";
import {Link} from "expo-router";

export const Product = () => (
    <View style={styles.container}>
        <Card style={styles.card}>
            <Card.Cover source={{uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e7c9aadd-242a-4dd4-8509-6ddf9645525e/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EB%A0%88%ED%8A%B8%EB%A1%9C-%ED%95%98%EC%9D%B4-og-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-Nk3sFsOc.png'}} />
            <Card.Title
                title="에어 조던"
                subtitle="리미티드 에디션 V1" />
            <Card.Content>
                <Text>20,000원</Text>
            </Card.Content>
        </Card>
        <Card style={styles.card}>
            <Card.Cover source={{uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-74ad2438-d647-46ae-8abd-e0806226e344/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EB%A1%9C%EC%9A%B0-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-S2rOCbXI.png'}} />
            <Card.Title
                title="조던 짭"
                subtitle="중국 직구" />
            <Card.Content>
                <Text>43,000원</Text>
                <Link href="/" asChild>
                    <Pressable>
                        <Text>Home</Text>
                    </Pressable>
                </Link>
            </Card.Content>
        </Card>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // 카드를 수평으로 배치
        justifyContent: 'space-around', // 카드 사이의 간격을 균등하게 분배
        marginTop: StatusBar.currentHeight || 0 // 플랫폼별 상태바 높이 만큼 여백 추가
    },
    card: {
        flex: 1, // 카드가 가능한 공간을 균등하게 차지하도록 설정
        margin: 10 // 카드 주변에 공간을 추가
    }
});
