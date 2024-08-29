import { useEffect, useState } from 'react';
import Modal from '../../components/Modal';
import { RxCross1 } from 'react-icons/rx';
import { IoIosAdd } from 'react-icons/io';
import PricingCards from './PricingCards';
import { useForm, useFieldArray } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updatePricings } from '../../services/builderSlice';

function PricingSection() {
    const [isModalShown, setIsModalShown] = useState(true);
    const dispatch = useDispatch();

    const { register, control, handleSubmit, reset, watch } = useForm({
        defaultValues: {
            pricings: [
                {
                    name: 'Pricing 1',
                    price: '0',
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
                {
                    name: 'Pricing 2',
                    price: '0',
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
                {
                    name: 'Pricing 3',
                    price: '0',
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
                <Modal isShown={isModalShown}>
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
