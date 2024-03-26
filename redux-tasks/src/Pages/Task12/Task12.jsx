import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { inputValue, addTask, deleteTask } from "../../Slice/bringTheTask";

function Task12() {
  const tasks = useSelector((state) => state.bringTheTask);
  const dispatch = useDispatch();

  function clickButton() {
    dispatch(addTask());
  }

  function deleteMe(e) {
    dispatch(deleteTask(e.target.id));
  }
  return (
    <>
      <h1>Задача 12</h1>
      <p>
        Реализуйте компонент "Список задач", который позволяет пользователю
        добавлять, удалять и отмечать задачи как выполненные.
      </p>

      <input
        onChange={(e) => dispatch(inputValue(e.target.value))}
        type="text"
      />
      <button onClick={clickButton}>Click me</button>
      <div>
        {tasks.array.map((el) => (
          <p>
            <button id={el} onClick={deleteMe}>
              delete
            </button>
            {el}
          </p>
        ))}
      </div>

      <p>
        <Link to="/">Вернуться к главной странице</Link>
      </p>
    </>
  );
}

export default Task12;
