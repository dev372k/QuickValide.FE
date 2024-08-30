import { useState, useEffect } from 'react';
import { request } from '../../helpers/requestHelper';
import { useDispatch, useSelector } from 'react-redux';
import { updateApp } from '../../services/builderSlice';
import Theme0Desktop from '../../themes/Theme 0/Theme0Desktop';
import Theme0Actual from '../../themes/Theme 0/Theme0Actual';

function UserApp({ subdomain, token }) {
    const [themeId, setThemeId] = useState(1);
    const appName = subdomain.replaceAll('-', ' ');
    const dispatch = useDispatch();
    // const themeId = useSelector((state) => state.builder.themeId);
    console.log(token);
    useEffect(function () {
        async function getUserApp() {
            const res = await request(`https://api.quickvalide.com/api/App/${appName}/GetByName`);
            setThemeId(res.data.themeId);
            dispatch(updateApp(res.data));
        }

        getUserApp();
    }, []);

    console.log(themeId);

    return (
        <>
            {(() => {
                switch (themeId) {
                    case 1:
                        return <Theme0Actual />;

                    default:
                        return <p>Unknown status</p>;
                }
            })()}
        </>
    );
}

export default UserApp;
