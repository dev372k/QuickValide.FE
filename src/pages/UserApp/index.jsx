import { useState, useEffect } from 'react';
import { request } from '../../helpers/requestHelper';

function UserApp({ subdomain, token }) {
    const appName = subdomain.replaceAll('-', ' ');
    console.log(token);
    useEffect(function () {
        async function getUserApp() {
            const res = await request(`https://api.quickvalide.com/api/App/${appName}/GetByName`);
            console.log(res);
        }

        getUserApp();
    }, []);

    return <h2>User App</h2>;
}

export default UserApp;
