import { useForm } from 'react-hook-form';

const MainForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const submit = (data) => {
        console.log(data)
        reset();
    };

    return (
        <section className="bg-[#446A82] px-5">
            <div className="w-full max-w-[1280px] mx-auto py-[60px] flex flex-col items-center">
                <h2 className='max-w-[730px] my-text-white text-2xl md:text-4xl leading-9 md:leading-[2.813rem] text-center mb-[35px] md:mb-[50px]'>Vestibulum ornare nec enim at viverra integer non quam euismod.</h2>

                <form className='w-full max-w-[540px]' onSubmit={handleSubmit(submit)}>
                    <label htmlFor="yourName" className='block w-full my-text-white text-base md:text-xl leading-4 md:leading-5 uppercase mb-5'>Your Name</label>
                    <input id='yourName' className='block w-full mb-[54px] p-4 rounded outline-none' type="text" {...register('name', { required: true })} />

                    <label htmlFor="yourEmail" className='block w-full my-text-white text-base md:text-xl leading-4 md:leading-5 uppercase mb-5'>Your Email</label>
                    <input id='yourEmail' className='block w-full mb-[54px] p-4 rounded outline-none' type="email" {...register('email', { required: true })} />

                    <label htmlFor='yourComment' className='block w-full my-text-white text-base md:text-xl leading-4 md:leading-5 uppercase mb-5'>A few farm words</label>
                    <textarea id='yourComment' className='block w-full mb-[20px] p-4 rounded outline-none' cols="30" rows="4" {...register('comment')} />

                    <div className='md:flex md:items-center md:justify-between'>
                        <div className='mb-[25px] md:mb-0'>
                            <input className='rounded mr-2' type="checkbox" {...register('chooseAr')} />
                            <label className='my-text-white text-base md:text-xl leading-4 md:leading-5 uppercase mb-5' htmlFor="">I accept the agreement</label>
                        </div>
                        <input className='my-text-white block w-[160px] md:w-[121px] h-[40px] md:[50px] bg-[#fdb913] rounded-[50px] mx-auto md:mx-0 uppercase text-sm leading-3 ' type="submit" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export { MainForm };