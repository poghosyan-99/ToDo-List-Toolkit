import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { resetText, selectText, toggleText } from '../../Store/Slices/Text/textSlice';

import './style.css';
import { addToDoItem, checkTodoItem, deleteTodoItem, selectToDos } from '../../Store/Slices/ToDos/toDosSlice';

const Todo = () => {
    const text = useSelector(selectText);
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const hendlerSubmit = (e) => {
      e.preventDefault();
      dispatch(addToDoItem(text));
      dispatch(resetText());
    }

    const toDos = useSelector(selectToDos);

    return(
      <div className="ToDos">
        <div className="Todo">
          <h1>TODO LIST</h1>
          <div className='AddTodo'>
            <form onSubmit={hendlerSubmit}>
              <input 
                ref={inputRef}
                type="text" 
                placeholder="Add ToDo..." 
                value={text} 
                onChange={(e) => dispatch(toggleText(e.target.value))}
              />
              <button type="submit">{'Add'}</button>
            </form>
          </div>

          {toDos && toDos.map((todo, index) => {
            return(
              <div key={todo.id}>
                <div className='taskBg'>
                  <div className={todo.isCompleted ? 'done' : ''}>
                    <span className='number'>{index + 1}</span>
                    <span className='task'>{todo.title}</span>
                  </div>
                  <div className='iconsDiv'>
                    <i className="fas fa-check" onClick={() => dispatch(checkTodoItem(todo.id))}></i>
                    <i className="fas fa-trash" onClick={() => dispatch(deleteTodoItem(index))}></i>
                  </div>
                </div>
              </div>
            )
           })}
        </div>
      </div>
    );
}

export default Todo;