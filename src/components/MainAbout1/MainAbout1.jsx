import img1SideSmall from '../../assets/png/img-side1-small.png';
import img1Side from '../../assets/png/img-side1.png';

const MainAbout1 = () => {
    return (
        <section className="bg-[#F8F8F8] px-5">
            <div className="w-full max-w-[1280px] mx-auto py-[40px] md:flex md:justify-between md:items-center">
                <div className='w-full md:max-w-[540px] md:ml-[105px] md:flex md:flex-col md:justify-center'>
                    <h2 className='my-text-grey text-[1.563rem] md:text-[2.188rem] leading-[2.188rem] md:leading-[2.813rem] mb-[20px]'>Lorem ipsum dolor sit amet, consectetur elit eleifend mauris.</h2>

                    <p className='my-text-grey text-sm md:text-base leading-[1.375rem] md:leading-[1.563rem] mb-[20px]'>
                        Phasellus quis sapien ac ex eleifend viverra non vulputate mi. Praesent in sodales lacus, et vehicula ex.
                        Pellentesque elementum eu nisl non posuere. Sed lobortis purus non tempor dapibus.
                    </p>

                    <p className='my-text-grey text-sm md:text-base leading-[1.375rem] md:leading-[1.563rem] mb-[20px]'>
                        Sed nec iaculis leo, in luctus ipsum. Sed eu neque consectetur, mollis neque vel, ultrices quam.
                        Donec ullamcorper consectetur lacinia. Praesent laoreet enim eget leo suscipit, at bibendum elit egestas.
                        Cras euismod congue nunc id convallis.
                    </p>
                </div>

                <div className='md:mr-[105px]'>
                    <img className='hidden md:block' src={img1Side} alt="img side" />
                    <img className='md:hidden mx-auto' src={img1SideSmall} alt="img side" />
                </div>
            </div>
        </section>
    )
}

export { MainAbout1 };