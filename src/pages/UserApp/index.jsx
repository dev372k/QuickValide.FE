import { useState, useEffect } from 'react';
import { request } from '../../helpers/requestHelper';
import { useDispatch, useSelector } from 'react-redux';
import { updateApp } from '../../services/builderSlice';
import Theme0Desktop from '../../themes/Theme 0/Theme0Desktop';
import Theme0Actual from '../../themes/Theme 0/Theme0Actual';
import CustomLoader from '../../components/CustomLoader';

function UserApp({ subdomain, token }) {
    const [themeId, setThemeId] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const appName = subdomain.replaceAll('-', ' ');
    const dispatch = useDispatch();

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

    console.log(themeId);

    return (
        <>
            {isLoading ? (
                <CustomLoader />
            ) : (
                (() => {
                    switch (themeId) {
                        case 1:
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
