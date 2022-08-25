import person from '../../assets/png/man1.png';
import person1 from '../../assets/png/man1_small.png';
import logo from '../../assets/svg/logo.svg';
import logoSmall from '../../assets/svg/logo-small.svg';

const Header = () => {
    return (
        <header className='bg-bg-header bg-no-repeat bg-cover bg-center px-5 pt-5 md:pt-14'>
            <div className='w-full max-w-[1280px] mx-auto md:flex md:justify-between md:items-end'>
                <div className='w-full max-w-[540px] md:ml-[105px] md:pb-[70px]'>
                    <div className='mb-[25px]'>
                        <img className='hidden md:block' src={logo} alt="logo" />
                        <img className='md:hidden' src={logoSmall} alt="logo" />
                    </div>

                    <h1 className='my-text-white text-[2rem] leading-[2.5rem] mb-[20px] md:text-[2.813rem] md:leading-[3.438rem]'>Lorem ipsum dolor sit consectetur adipiscing elit nullam sagittis.</h1>

                    <p className='my-text-white text-[1rem] md:text-[1.25rem] leading-[1.5rem] md:leading-[1.875rem] mb-[25px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis risus et diam euismod vestibulum.
                        Fusce suscipit leo ornare nulla ullamcorper, sed pellentesque libero ornare. Praesent egestas rhoncus sagittis.
                    </p>

                    <div className='mb-[25px]'>
                        <button className='w-[160px] md:w-[200px] h-[40px] md:h-[50px] bg-[#fdb913] 
                    rounded-[50px] my-text-white font-bold text-xs 
                    leading-[0.875rem] tracking-widest uppercase'>book a meeting</button>
                    </div>
                </div>

                <div className='mx-auto md:mr-[105px]'>
                    <img className='hidden md:block md:max-w-[350px]' src={person} alt="person" />
                    <img className='md:hidden' src={person1} alt="person" />
                </div>
            </div>
        </header>
    )
}

export { Header };