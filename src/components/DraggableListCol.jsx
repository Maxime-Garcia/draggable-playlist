// eslint-disable-next-line no-unused-vars
import Draggable, { DraggableCore } from "react-draggable";
import DraggableListItem from "./DraggableListItem";
import PropTypes from 'prop-types'

function DraggableListCol(tasks) {
    return (
        <>
            {tasks.tasks.map(task => (
                <div className='row'>
                    <Draggable>
                        <div className="col" style={{ backgroundColor: "#EDE9D7", textAlign: "center", border: "", width: "400px", height: "100px", margin: "1em 1em 1em 1em", cursor: "pointer" }}>
                            <DraggableListItem task={task}></DraggableListItem>
                        </div>
                    </Draggable>
                </div>
            ))}
        </>
    );
}

DraggableListCol.propTypes = {
    data: PropTypes.array
}

export default DraggableListCol;