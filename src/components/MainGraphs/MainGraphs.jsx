import { GraphComponent } from '../../components';
import { imgArr } from '../../serviceData';

const MainGraphs = () => {
    return (
        <section className="px-5">
            <div className="w-full max-w-[1280px] mx-auto py-[40px]">
                <div className='md:mx-[105px] flex flex-col items-center md:flex-row md:justify-between'>
                    {imgArr.map(graph => <GraphComponent
                        key={graph.id}
                        graph={graph}
                    />)}
                </div>
            </div>
        </section>
    )
}

export { MainGraphs };