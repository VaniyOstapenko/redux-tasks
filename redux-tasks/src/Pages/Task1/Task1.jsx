import { Link } from "react-router-dom";
import { increment } from "../../Slice/counter1";
import { useDispatch, useSelector } from "react-redux";

function Task1() {
  const count = useSelector((state) => state.counter1);
  const dispatch = useDispatch();

  function clickButton() {
    dispatch(increment());
  }
  return (
    <>
      <h1>Задача 1</h1>
      <p>
        Создайте компонент инкремента. Компонент возвращает кнопку и параграф, в
        котором отображается значение (первоначальное значение 1). Ваша задача
        так реализовать функционал, чтобы при клике на кнопку автоматически
        прибавлялась +1 к значению параграфа
      </p>

      <h1>{count}</h1>
      <button onClick={clickButton}>+1</button>

      <p>
        <Link to="/">Вернуться к главной странице</Link>
      </p>
    </>
  );
}

export default Task1;
