import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Account = () => {
    const [accountDetails, setAccountDetails] = useState(null);

    useEffect(() => {
        const fetchAccountDetails = async () => {
            const token = localStorage.getItem('accessToken');
            const response = await axios.get('http://localhost:8080/api/account', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setAccountDetails(response.data);
        };
        fetchAccountDetails();
    }, []);

    return (
        <div>
            {accountDetails ? (
                <pre>{JSON.stringify(accountDetails, null, 2)}</pre>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Account;
