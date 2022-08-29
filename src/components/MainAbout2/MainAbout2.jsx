import side2Small from '../../assets/png/img-side2-small.png';
import side2 from '../../assets/png/img-side2.png';

const MainAbout2 = () => {
    return (
        <section className="px-5 bg-[#FDB913]">
            <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center md:flex-row">
                <div className=''>
                    <img className='md:hidden' src={side2Small} alt="side img" />
                    <img className='hidden md:block' src={side2} alt="side img" />
                </div>

                <div className='m-[40px] w-full md:max-w-[445px] md:ml-[110px] md:my-[50px]'>
                    <h2 className='my-text-white text-[1.563rem] md:text-[2.188rem] leading-[2.188rem] md:leading-[2.813rem] mb-5'>Lorem ipsum dolor sit amet, consectetur elit eleifend mauris.</h2>

                    <p className='my-text-white text-sm md:text-base leading-5 md:leading-[1.563rem] mb-5'>
                        Phasellus quis sapien ac ex eleifend viverra non vulputate mi. Praesent in sodales lacus,
                        et vehicula ex. Pellentesque elementum eu nisl non posuere. Sed lobortis purus non tempor dapibus.
                    </p>

                    <p className='my-text-white text-sm md:text-base leading-5 md:leading-[1.563rem]'>
                        Sed nec iaculis leo, in luctus ipsum. Sed eu neque consectetur, mollis neque vel, ultrices quam.
                        Donec ullamcorper consectetur lacinia. Praesent laoreet enim eget leo suscipit, at bibendum elit egestas.
                        Cras euismod congue nunc id convallis.
                    </p>
                </div>
            </div>
        </section>
    )
}

export { MainAbout2 };