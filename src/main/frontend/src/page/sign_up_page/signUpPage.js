import React from 'react';
import {Link} from 'react-router-dom';

const SignupPage = () => {
    return (
        <div>
            <h1>Signup Page</h1>
            {/* 회원가입 폼 */}
            <Link to="/login">로그인 페이지로 이동</Link>
        </div>
    );
};

export default SignupPage;