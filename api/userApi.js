import axios from 'axios';
const baseUrl = 'https://reqres.in';

export const fetchUser = async () => {
  try {
    const configurationObject = {
      method: 'get',
      url: `${baseUrl}/api/users/1`,
    };
    const response = await axios(configurationObject);
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;  // 에러를 다시 던져서 호출자가 처리할 수 있도록 함
  }
};