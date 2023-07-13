
function DraggableListItem({ task }) {
    return (
        <>
            <h1>{task.instigator}</h1>
            <p>{task.name}{' - '}<strong>{task.dueTime}</strong></p>
        </>
    );
}

export default DraggableListItem;