
const src = "https://www.youtube.com/embed/xVK7t7kFg4E";

const MainVideo = () => {
    return (
        <section className="px-5">
            <div className="w-full max-w-[1280px] mx-auto py-[40px]">
                <h2 className="my-text-grey text-[1.875rem] md:[2.188rem] leading-[2.188rem] text-center mb-[45px]">Lorem ipsum dolor sit amet</h2>

                <div>
                    <iframe
                        className="w-full max-w-[394px] md:max-w-[920px] h-[248px] md:h-[517px] mx-auto"
                        src={src}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export { MainVideo };