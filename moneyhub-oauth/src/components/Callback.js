import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      axios.post('/api/token', { code })
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token);
          navigate('/account');
        })
        .catch(error => {
          console.error('Error fetching token:', error);
        });
    }
  }, [navigate]);

  return (
    <div>
      <h1>Authenticating...</h1>
    </div>
  );
};

export default Callback;
