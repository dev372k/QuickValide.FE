import Theme0Actual from '../../themes/Theme 0/Theme0Actual';
import Theme1Actual from '../../themes/Theme 1/Theme1Actual';
import { useSelector } from 'react-redux';

function AppPreview() {
    const themeId = useSelector((state) => state.builder.themeId);

    switch (themeId) {
        case 1:
            return <Theme1Actual />;
        case 2:
            return <Theme0Actual />;

        default:
            return <p>Unknown status</p>;
    }
}

export default AppPreview;
