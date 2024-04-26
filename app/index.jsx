import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { loginRequest } from '../api/auth/authApi';
import { router } from 'expo-router';

function LoginPage() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        const token = async () => {
            const token = await loginRequest('thayer@naver.com', '1234');
            console.log(token);
            setToken(token);
        };

        token();
    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    mode="outlined"
                    placeholder="Enter E-mail"
                    value={userName}
                    onChangeText={setUserName}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    mode="outlined"
                    placeholder="Enter Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Button
                    mode="contained"
                    onPress={() => {
                        router.push("(tabs)")
                    }}
                    style={styles.button}
                >
                    GO
                </Button>
            </View>
        </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', paddingHorizontal: 20, backgroundColor: '#f5f5f5',
    }, form: {
        backgroundColor: 'white', padding: 20, borderRadius: 10, shadowColor: 'black', shadowOffset: {
            width: 0, height: 2,
        }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5,
    }, label: {
        fontSize: 16, marginBottom: 15, // 레이블과 입력 필드 사이의 간격 증가
        fontWeight: 'bold',
    }, input: {
        marginBottom: 15, // 입력 필드 간의 간격
    }, button: {
        marginTop: 10, // 버튼과 위의 요소 사이에 간격 추가
    },
});

export default LoginPage;
