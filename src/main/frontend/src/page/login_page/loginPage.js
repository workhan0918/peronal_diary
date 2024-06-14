import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './loginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // 여기서 axios를 사용하여 로그인 API를 호출할 수 있습니다.
            console.log('로그인 성공!');
            navigate('/dashboard'); // 로그인 성공 시 다음 경로로 이동
        } catch (error) {
            console.error('로그인 실패:', error);
            // 실패 처리 로직 추가
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="title">로그인</h1>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="email">이메일</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="example@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">비밀번호</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">로그인</button>
                </form>
                <div className="signup-link">
                    <p>
                        아직 회원이 아니신가요? <Link to="/signup">회원가입</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
