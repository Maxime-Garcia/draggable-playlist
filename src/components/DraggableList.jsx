import DraggableListCol from "./DraggableListCol";

function DraggableList(taskCols) {
    return (
        <>
            {taskCols.tasks.map(task => (
                <div className='col'>
                    <h2 style={{ textAlign: "center" }}>{task.colName}</h2>
                    <DraggableListCol props={task.tasks}></DraggableListCol>
                </div>
            ))}
        </>
    );
}

export default DraggableList;