import React from 'react';

const Login = () => {
    const clientId = '8b65f03d-c3ed-4421-8646-0c1abe920a3e';
    const redirectUri = 'http://localhost:3000/callback';
    const authUrl = `https://auth.moneyhub.co.uk/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid accounts`;

    return (
        <div>
            <h1>Login with Moneyhub</h1>
            <a href={authUrl}>Login</a>
        </div>
    );
};

export default Login;
