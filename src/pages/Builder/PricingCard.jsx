import { useState } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { RxCross1 } from 'react-icons/rx';

function PricingCard({ index, pricingFields, append, remove, register, update, reset, insert }) {
    const addFeatureToPricing = (pricingIndex) => {
        const newFeature = { feature: 'New Feature', isIncluded: false };
        const updatedFeatures = [...pricingFields[pricingIndex].features, newFeature];
        const newPricing = {
            ...pricingFields[pricingIndex],
            features: updatedFeatures,
        };

        remove(pricingIndex);
        insert(pricingIndex, newPricing);
    };

    const removeFeatureFromPricing = (pricingIndex, featureIndex) => {
        const features = pricingFields[pricingIndex].features;
        const updatedFeatures = features.filter((_, index) => index !== featureIndex);

        const newPricing = {
            ...pricingFields[pricingIndex],
            features: updatedFeatures,
        };

        remove(pricingIndex);
        insert(pricingIndex, newPricing);
    };

    return (
        <div className='flex flex-col gap-4 p-4 rounded-md border relative'>
            <div
                className='absolute top-3 right-3 p-1 rounded-full hover:bg-slate-200 cursor-pointer hover:text-accent-1'
                onClick={() => remove(index)}
            >
                <RxCross1 size={20} />
            </div>
            <div className='flex flex-col gap-2'>
                <input
                    type='text'
                    placeholder={`Pricing ${index + 1}`}
                    className='focus:outline-none text-lg font-medium text-text-primary'
                    {...register(`pricings.${index}.name`)}
                />
                <div className='flex items-center'>
                    <input
                        type='text'
                        pattern='^[0-9]+$'
                        className='text-4xl font-semibold focus:outline-none'
                        {...register(`pricings.${index}.price`)}
                        style={{
                            width: '4ch',
                        }}
                    />
                    <p className='text-xs text-text-secondary'>/month</p>
                </div>
            </div>

            <div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center justify-between gap-2'>
                        <h2 className='text-text-primary font-medium'>Features</h2>
                        <div className='flex items-center gap-1'>
                            <p
                                className='text-xs text-text-secondary'
                                onClick={() => addFeatureToPricing(index)}
                            >
                                Add Feature:
                            </p>
                            <div>
                                <IoIosAdd size={16} />
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        {pricingFields.at(index).features.map((feature, featuresIndex) => {
                            return (
                                <div className='flex items-center justify-between text-sm w-full'>
                                    <input
                                        type='text'
                                        className=''
                                        {...register(
                                            `pricings.${index}.features.${featuresIndex}.feature`
                                        )}
                                    />
                                    <div className='text-xs flex items-center gap-1 text-text-secondary'>
                                        <p>Included</p>
                                        <input
                                            type='checkbox'
                                            {...register(
                                                `pricings.${index}.features.${featuresIndex}.isIncluded`
                                            )}
                                        />
                                        <div
                                            onClick={() =>
                                                removeFeatureFromPricing(index, featuresIndex)
                                            }
                                        >
                                            <RxCross1 size={16} className='text-error' />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div>
                <button className='text-sm p-2 text-center border rounded-sm w-full'>
                    Subscribe Button
                </button>
            </div>
        </div>
    );
}

export default PricingCard;
