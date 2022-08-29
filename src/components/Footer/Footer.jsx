import logo from '../../assets/svg/logo-small.svg';

const Footer = () => {
    return (
        <footer className="bg-[#446A82] px-5">
            <div className="w-full max-w-[1280px] mx-auto py-12 flex items-center justify-center">
                <div className='md:mr-4'>
                    <img className='hidden md:block' src={logo} alt="logo" />
                </div>
                <p className='my-text-white text-base leading-6'>© 2020 Salmiac | All Rights Reserved</p>
            </div>
        </footer>
    )
}

export { Footer };