import AboutUsSection from './AboutUsSection';
import GeneralInfoSection from './GeneralInfoSection';
import HeroSection from './HeroSection';
import { useState } from 'react';
import PricingSection from './PricingSection';
import { RxCross1 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { message } from 'antd';
import { request } from '../../helpers/requestHelper';
import CustomLoader from '../../components/CustomLoader';
import { useNavigate } from 'react-router-dom';

function BuilderControls({ setOpenMobileBuilder }) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const navigate = useNavigate();

    const appId = urlParams.get('appId');

    const [selectedSection, setSelectedSection] = useState('select');
    const [isLoading, setIsLoading] = useState(false);
    const [isPreviewLoading, setIsPreviewLoading] = useState(false);
    const themeData = useSelector((state) => state.builder);

    async function handleSave() {
        if (!themeData.email) return message.error('Please enter email in general info section');

        try {
            setIsLoading(true);
            const res = await request(
                `https://api.quickvalide.com/api/App/${appId}`,
                'PUT',
                themeData
            );
            if (!res.status) throw new Error(res?.message);
            message.success(res?.message);
        } catch (err) {
            message.error(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    async function handlePreview() {
        setIsPreviewLoading(true);
        const res = await request(`https://api.quickvalide.com/api/App/${appId}`, 'PUT', themeData);
        setIsPreviewLoading(false);
        if (res.status)
            window.open(
                'https://' +
                    themeData.name
                        .trim()
                        .toLowerCase()
                        .replace(/[" "]+/g, '-') +
                    '.quickvalide.com',
                '_blank'
            );
    }

    return (
        <div className='h-[calc(100vh-65px)] bg-white p-6 flex flex-col gap-2 overflow-y-auto'>
            {isLoading && <CustomLoader />}
            <div
                onClick={() => setOpenMobileBuilder(false)}
                className='self-end mb-4 p-1 hover:bg-slate-100 hover:text-accent-1 rounded-full cursor-pointer md:hidden'
            >
                <RxCross1 size={20} />
            </div>
            <div className='flex items-center gap-2 self-end text-sm mb-4'>
                <button
                    onClick={handlePreview}
                    className='p-2 px-8 border rounded-md text-text-secondary'
                >
                    {isPreviewLoading ? 'Loading...' : 'Preview'}
                </button>
                <button className='p-2 px-8 bg-accent-1 rounded-md text-white' onClick={handleSave}>
                    Save
                </button>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-sm'>Select Section</p>
                <select
                    name='section'
                    id='section'
                    className='flex items-center justify-center p-2 rounded-md border text-sm w-full focus:outline-none focus:border-accent-2'
                    value={selectedSection}
                    onChange={(e) => setSelectedSection(e.target.value)}
                >
                    <option value='select'>Select Section</option>
                    <option value='general'>General Info</option>

                    <option value='hero'>Hero</option>
                    <option value='about'>About Us</option>
                    <option value='pricings'>Pricings</option>
                </select>
            </div>
            {(() => {
                switch (selectedSection) {
                    case 'select':
                        return;
                    case 'general':
                        return <GeneralInfoSection data={themeData} />;

                    case 'hero':
                        return <HeroSection />;
                    case 'about':
                        return <AboutUsSection />;
                    case 'pricings':
                        return <PricingSection />;
                }
            })()}
        </div>
    );
}

export default BuilderControls;
