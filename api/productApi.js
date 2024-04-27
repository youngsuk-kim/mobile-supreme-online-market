import axios from 'axios';
const baseUrl = 'http://10.0.2.2:8080/api/v1';

export const fetchProducts = async () => {
    try {
        const configurationObject = {
            method: 'get',
            url: `${baseUrl}/products`,
        };
        const response = await axios(configurationObject);
        return response.data.data;
    } catch (error) {
        console.error("An error occurred:", error);
        throw error;  // 에러를 다시 던져서 호출자가 처리할 수 있도록 함
    }
};