import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './page/login_page/loginPage';
import SignupPage from './page/sign_up_page/signUpPage';

function App() {
    const [hello, setHello] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/test')
            .then(response =>
                setHello(response.data))
            .catch(error => console.log(error))

        axios.get('/api/users') // 새로운 API 호출: 사용자 정보를 가져오는 API
            .then(response => {
                setUsers(response.data); // 가져온 사용자 정보를 상태 변수에 저장
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    return (
        <div>
            <p>백엔드에서 가져온 데이터입니다 : {hello}</p>

            {/*            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.userIdNo}>
                        <strong>User ID NO</strong>: {user.userIdNo}<br/>
                        <strong>User ID:</strong> {user.userId}<br/>
                        <strong>User PW:</strong> {user.userPw}<br/>
                        <strong>User Name:</strong> {user.userName}<br/>
                        <strong>Create Date:</strong> {user.createDate}<br/>
                        <strong>User State:</strong> {user.userState}<br/>
                        <hr/>
                    </li>
                ))}
            </ul>*/}

            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/signup" element={<SignupPage/>}/>
                    {/* 기본 경로 설정 */}
                    <Route path="/" element={<LoginPage/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;