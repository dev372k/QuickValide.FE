import { useEffect, useState } from 'react';
import Modal from '../../components/Modal';
import { RxCross1 } from 'react-icons/rx';
import { IoIosAdd } from 'react-icons/io';
import PricingCards from './PricingCards';
import { useForm, useFieldArray } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updatePricings } from '../../services/builderSlice';

const modalVariants = {
    show: {
        opacity: 1,
        scale: 1,
    },
    hide: {
        opacity: 0,
        scale: 0.6,
    },
};

function PricingSection() {
    const [isModalShown, setIsModalShown] = useState(false);
    const dispatch = useDispatch();

    const themeData = useSelector((state) => state.builder);

    const appPricings = themeData.pricing ? JSON.parse(themeData.pricing) : [];

    console.log('Theme Data', themeData);
    console.log('App Pricings', appPricings);

    const { register, control, handleSubmit, reset, watch } = useForm({
        defaultValues: {
            pricings: appPricings || [
                {
                    name: 'Basic',
                    price: '5',
                    features: [
                        {
                            feature: 'Feature 1',
                            isIncluded: true,
                        },
                        {
                            feature: 'Feature 2',
                            isIncluded: false,
                        },
                        {
                            feature: 'Feature 3',
                            isIncluded: false,
                        },
                    ],
                },
                {
                    name: 'Standard',
                    price: '10',
                    features: [
                        {
                            feature: 'Feature 1',
                            isIncluded: true,
                        },
                        {
                            feature: 'Feature 2',
                            isIncluded: true,
                        },
                        {
                            feature: 'Feature 3',
                            isIncluded: false,
                        },
                    ],
                },
                {
                    name: 'Premium',
                    price: '25',
                    features: [
                        {
                            feature: 'Feature 1',
                            isIncluded: true,
                        },
                        {
                            feature: 'Feature 2',
                            isIncluded: true,
                        },
                        {
                            feature: 'Feature 3',
                            isIncluded: true,
                        },
                    ],
                },
            ],
        },
    });

    const {
        fields: pricingFields,
        append,
        remove,
        update,
        insert,
    } = useFieldArray({
        control,
        name: 'pricings',
    });

    function appendPricing() {
        append({
            name: 'New pricing',
            price: 0,
            features: [
                {
                    feature: 'Feature 1',
                    isIncluded: true,
                },
                {
                    feature: 'Feature 2',
                    isIncluded: true,
                },
                {
                    feature: 'Feature 3',
                    isIncluded: true,
                },
            ],
        });
    }

    const watchedFields = watch('pricings');

    useEffect(
        function () {
            dispatch(updatePricings(JSON.stringify(watchedFields)));
        },
        [JSON.stringify(watchedFields), dispatch]
    );

    return (
        <>
            <div className='w-full mt-6'>
                <button
                    className='p-2 text-sm text-white bg-accent-1 rounded-md w-full'
                    onClick={() => setIsModalShown(true)}
                >
                    Edit Pricings
                </button>
            </div>

            <main>
                <Modal
                    isShown={isModalShown}
                    variants={modalVariants}
                    animate={isModalShown ? 'show' : 'hide'}
                    initial={isModalShown ? 'show' : 'hide'}
                >
                    <div className='p-6 relative'>
                        {/* Close Icon  */}
                        <div
                            onClick={() => setIsModalShown(false)}
                            className='absolute font-bold right-2 top-2 hover:bg-gray-50 hover:text-error p-2 rounded-full'
                        >
                            <RxCross1 size={26} />
                        </div>

                        <div className='flex flex-col gap-8 w-full'>
                            <div className='flex flex-col gap-1 mt-6'>
                                <h2 className='text-xl font-medium text-text-primary'>
                                    Edit Pricings
                                </h2>
                                <p className='text-sm text-text-secondary'>
                                    Edit the following cards by clicking on text
                                </p>
                            </div>

                            <div className='flex items-center gap-3 text-sm  self-end justify-end'>
                                <p>Add Pricing</p>
                                <div
                                    className='p-1 rounded-full hover:bg-slate-200 cursor-pointer'
                                    onClick={appendPricing}
                                >
                                    <IoIosAdd size={40} />
                                </div>
                            </div>

                            <PricingCards
                                pricingFields={pricingFields}
                                append={append}
                                remove={remove}
                                register={register}
                                handleSubmit={handleSubmit}
                                update={update}
                                reset={reset}
                                insert={insert}
                            ></PricingCards>
                        </div>
                    </div>
                </Modal>
            </main>
        </>
    );
}

export default PricingSection;
