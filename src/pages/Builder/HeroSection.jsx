import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateHero } from '../../services/builderSlice';

function HeroSection() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const heroData = useSelector((state) => state.builder.pageContent);
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data);
    };
    const watchedFields = watch();

    useEffect(() => {
        // Call your custom function here
        dispatch(updateHero(watchedFields.heroHeading));
        handleInputChange(watchedFields);
    }, [watchedFields]);

    useEffect(() => {
        reset({
            heroHeading: heroData,
        });
    }, []);

    const handleInputChange = (values) => {};
    return (
        <div className='flex flex-col gap-3 mt-6'>
            <h3 className='text-lg font-semibold text-text-primary'>Hero Section</h3>

            <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='heading' className='text-sm text-text-secondary'>
                        Heading:
                    </label>
                    <textarea
                        type='text'
                        placeholder='Enter hero heading'
                        className='text-sm p-2 bg-none border rounded-md'
                        {...register('heroHeading', {
                            required: 'This field is required',
                        })}
                        rows={5}
                    ></textarea>
                </div>
                {/*
                <div className='flex flex-col gap-1'>
                    <label htmlFor='heading' className='text-sm text-text-secondary'>
                        Description:
                    </label>
                    <textarea
                        type='text'
                        placeholder='Enter hero heading'
                        className='text-sm p-2 bg-none border rounded-md'
                        rows={3}
                        {...register('heroDescription', {
                            required: 'This field is required',
                        })}
                    ></textarea>
                </div> */}
            </form>
        </div>
    );
}

export default HeroSection;
