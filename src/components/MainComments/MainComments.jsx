import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { comments } from '../../serviceData/commentData';
import { CommentComponent } from '../CommentComponent/CommentComponent';

const handleDragStart = (e) => e.preventDefault();

const MainComments = () => {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    return (
        <section className="px-5">
            <div className="w-full max-w-[1280px] mx-auto my-[65px] flex flex-col items-center">
                <h2 className='my-text-grey text-2xl md:text-4xl leading-8 md:leading-9 mb-[60px]'>Lorem ipsum dolor sit amet</h2>

                <AliceCarousel
                    mouseTracking
                    items={comments.map(item => <CommentComponent
                        key={item.id}
                        item={item}
                        onDragStart={handleDragStart}
                        role={"presentation"}
                    />)}
                    responsive={responsive}
                    disableButtonsControls={false}
                    disableDotsControls={true}
                />
            </div>
        </section>
    )
}

export { MainComments };