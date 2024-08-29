import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAboutUs } from '../../services/builderSlice';

function AboutUsSection() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const aboutUsData = useSelector((state) => state.builder.aboutUs);
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data);
    };
    const watchedFields = watch('text');

    useEffect(() => {
        dispatch(updateAboutUs(watchedFields));
    }, [watchedFields]);

    useEffect(() => {
        reset({
            text: aboutUsData,
        });
    }, []);

    return (
        <div className='flex flex-col gap-3 mt-6'>
            <h3 className='text-lg font-semibold text-text-primary'>About Us Section</h3>

            <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='heading' className='text-sm text-text-secondary'>
                        Text:
                    </label>
                    <textarea
                        type='text'
                        placeholder='Enter hero heading'
                        className='text-sm p-2 bg-none border rounded-md'
                        rows={3}
                        {...register('text', {
                            required: 'This field is required',
                        })}
                    ></textarea>
                </div>
            </form>
        </div>
    );
}

export default AboutUsSection;
