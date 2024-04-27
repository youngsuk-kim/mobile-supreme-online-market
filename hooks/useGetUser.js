import { fetchUser } from '../api/userApi';
import { useEffect, useState } from 'react';

export function useGetUser() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setUser(await fetchUser());  // 데이터를 상태에 설정
            } catch (e) {
                console.error('Error fetching user:', e);  // 에러 로깅
            }
        };

        fetchUserData();
    }, []);

    return user;
}