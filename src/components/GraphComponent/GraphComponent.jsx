
const GraphComponent = ({ graph }) => {
    const { img, imGSmall, title, text } = graph;

    return (
        <div className="w-[240px] mb-[35px] md:mb-0 last:mb-0">
            <div className="mb-[20px]">
                <img className="md:hidden" src={imGSmall} alt="svg" />
                <img className="hidden md:block" src={img} alt="svg" />
            </div>
            <h2 className="my-text-grey text-xl md:text-3xl leading-[1.875rem] md:leading-[1.875rem] mb-[20px]">{title}</h2>
            <p className="my-text-grey text-sm md:text-base leading-5 md:leading-[1.563rem]">{text}</p>
        </div>
    )
}

export { GraphComponent };