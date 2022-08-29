
const CommentComponent = ({ item, onDragStart, role }) => {
    const { name, position, comment } = item;

    return (
        <div onDragStart={onDragStart} role={role} className="w-[294px] md:w-[350px]">
            <p className="my-text-grey-italic text-sm leading-6 mb-[25px]">{comment}</p>
            <h4 className="my-text-grey-bold text-xl leading-6">{name}</h4>
            <h4 className="my-text-grey text-xl leading-6">{position}</h4>
        </div>
    )
}

export { CommentComponent };