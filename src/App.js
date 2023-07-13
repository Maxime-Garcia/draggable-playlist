import './App.css';
import { useState } from 'react';
import Draggable, { DraggableCore } from "react-draggable";
import DraggableList from './components/DraggableList';

let initialData = [
  {
    colId: 0, colName: "To Do", tasks: [
      { id: 0, colId: 0, instigator: "Jean-Eude", name: "Ranger la maison", dueTime: "14/07/2023", isDone: false },
      { id: 1, colId: 0, instigator: "Patrick", name: "Faire la vaisselle", dueTime: "15/07/2023", isDone: false },
      { id: 2, colId: 0, instigator: "Solène", name: "Faire à manger", dueTime: "13/07/2023", isDone: false }
    ]
  },
  {
    colId: 1, colName: "Doing", tasks: [
      { id: 3, colId: 1, instigator: "Solène", name: "Faire à manger", dueTime: "13/07/2023", isDone: false },
      { id: 4, colId: 1, instigator: "Solène", name: "Faire à manger", dueTime: "13/07/2023", isDone: false }
    ]
  },
  {
    colId: 2, colName: "Done", tasks: [
      { id: 5, colId: 2, instigator: "Solène", name: "Faire à manger", dueTime: "13/07/2023", isDone: false }
    ]
  },
]

function App() {
  const [datas, setDatas] = useState(initialData);
  return (
    <>
      <div className='container'>
        <h1 style={{ textAlign: "center" }}>Tasks</h1>
        <hr></hr>
        <div className='row'>
          <DraggableList tasks={datas}></DraggableList>
        </div>
      </div>
    </>
  );
}

export default App;