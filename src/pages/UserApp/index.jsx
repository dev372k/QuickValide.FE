import { useState, useEffect } from 'react';
import { request } from '../../helpers/requestHelper';
import { useDispatch } from 'react-redux';
import { updateApp } from '../../services/builderSlice';

function UserApp({ subdomain, token }) {
    const appName = subdomain.replaceAll('-', ' ');
    const dispatch = useDispatch();
    console.log(token);
    useEffect(function () {
        async function getUserApp() {
            const res = await request(`https://api.quickvalide.com/api/App/${appName}/GetByName`);
            dispatch(updateApp(res.data));
        }

        getUserApp();
    }, []);

    return <h2>User App</h2>;
}

export default UserApp;
