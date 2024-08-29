import PricingCard from './PricingCard';

function PricingCards({
    pricingFields,
    append,
    remove,
    register,
    handleSubmit,
    update,
    reset,
    insert,
}) {
    return (
        <form className='w-full max-w-7xl gap-4 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]'>
            {pricingFields.map((pricing, index) => (
                <PricingCard
                    key={index}
                    pricing={pricing}
                    index={index}
                    pricingFields={pricingFields}
                    append={append}
                    remove={remove}
                    register={register}
                    update={update}
                    reset={reset}
                    insert={insert}
                />
            ))}
        </form>
    );
}

export default PricingCards;
