import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'Princess' && password === 'Sejal') {
            navigate('/dashboard');
        } else {
            alert('Invalid credentials!');
        }
    };

    return (
        <div className="login-container moving-background">
            <h2>Hey Sejal!!!</h2>
            <p> Welcome to your fairy world designed by ❤️</p>
            <input
                type="text"
                placeholder="Enter your Nick Name ?"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="What Sachin likes to eat ?"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
