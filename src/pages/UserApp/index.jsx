import { useState, useEffect } from 'react';
import { request } from '../../helpers/requestHelper';
import { useDispatch, useSelector } from 'react-redux';
import { updateApp } from '../../services/builderSlice';

import Theme0Actual from '../../themes/Theme 0/Theme0Actual';

import Theme1Actual from '../../themes/Theme 1/Theme1Actual';
import { BeatLoader as Loader } from 'react-spinners';
// import { SquircleLoader } from "react-awesome-loaders";

function UserApp({ subdomain, token }) {
    const [themeId, setThemeId] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const appName = subdomain.replaceAll('-', ' ');
    const dispatch = useDispatch();

    const themeData = useSelector((state) => state.builder);

    useEffect(function () {
        async function getUserApp() {
            setIsLoading(true);
            const res = await request(`https://api.quickvalide.com/api/App/${appName}/GetByName`);
            console.log(res);
            setThemeId(res.data?.themeId);
            dispatch(updateApp(res.data));
            setIsLoading(false);
        }

        getUserApp();
    }, []);

    return (
        <>
            {isLoading ? (
                <div className='w-full h-screen flex items-center justify-center absolute '>
                    <Loader color='#6c757d' />
                </div>
            ) : (
                (() => {
                    switch (themeId) {
                        case 1:
                            return <Theme1Actual />;
                        case 2:
                            return <Theme0Actual />;

                        default:
                            return <p>Unknown status</p>;
                    }
                })()
            )}
            {/* {(() => {
                switch (themeId) {
                    case 1:
                        return <Theme0Actual />;

                    default:
                        return <p>Unknown status</p>;
                }
            })()} */}
        </>
    );
}

export default UserApp;
