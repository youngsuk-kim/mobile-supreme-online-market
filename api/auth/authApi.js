import axios from 'axios';
const baseUrl = 'http://localhost:8080/api/v1';

export const loginRequest = async (email, password) => {
    try {
        const configurationObject = {
            method: 'post',
            url: `${baseUrl}/login`,
            data: {
                "email": email,
                "password": password
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = await axios(configurationObject);
        return response.data;
    } catch (error) {
        console.error("An error occurred:", error);
        throw error;  // 에러를 다시 던져서 호출자가 처리할 수 있도록 함
    }
};
