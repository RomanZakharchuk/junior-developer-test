import img1 from '../../assets/svg/client-logo1.svg';
import img2 from '../../assets/svg/client-logo2.svg';
import img3 from '../../assets/svg/client-logo3.svg';
import img4 from '../../assets/svg/client-logo4.svg';
import img5 from '../../assets/svg/client-logo5.svg';
import img6 from '../../assets/svg/client-logo6.svg';

const MainPartners = () => {
    return (
        <section className="px-5">
            <div className="w-full max-w-[1280px] mx-auto my-[65px] px-[105px] flex flex-col md:flex-row items-center md:justify-between">
                <div className='mb-[20px]'>
                    <img src={img1} alt="client logo" />
                </div>
                <div className='mb-[20px]'>
                    <img src={img2} alt="client logo" />
                </div>
                <div className='mb-[20px]'>
                    <img src={img3} alt="client logo" />
                </div>
                <div className='mb-[20px]'>
                    <img src={img4} alt="client logo" />
                </div>
                <div className='mb-[20px]'>
                    <img src={img5} alt="client logo" />
                </div>
                <div>
                    <img src={img6} alt="client logo" />
                </div>
            </div>
        </section>
    )
}

export { MainPartners };