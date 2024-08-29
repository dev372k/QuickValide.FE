import AboutUsSection from './AboutUsSection';
import GeneralInfoSection from './GeneralInfoSection';
import HeroSection from './HeroSection';
import { useState } from 'react';
import PricingSection from './PricingSection';

function BuilderControls() {
    const [selectedSection, setSelectedSection] = useState('general');
    return (
        <div className='min-h-screen bg-white p-6 px-8'>
            <div className='flex flex-col gap-1'>
                <p className='text-sm'>Select Section</p>
                <select
                    name='section'
                    id='section'
                    className='flex items-center justify-center p-1 rounded-sm border text-sm w-full'
                    value={selectedSection}
                    onChange={(e) => setSelectedSection(e.target.value)}
                >
                    <option value='general'>General Info</option>

                    <option value='hero'>Hero</option>
                    <option value='about'>About Us</option>
                    <option value='pricings'>Pricings</option>
                </select>
            </div>
            {(() => {
                switch (selectedSection) {
                    case 'general':
                        return <GeneralInfoSection />;

                    case 'hero':
                        return <HeroSection />;
                    case 'about':
                        return <AboutUsSection />;
                    case 'pricings':
                        return <PricingSection />;

                    default:
                        return <p>Unknown status</p>;
                }
            })()}
        </div>
    );
}

export default BuilderControls;
