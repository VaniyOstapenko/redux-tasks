import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPlusStr, getMinusStr } from "../../Slice/getLengthText";

function Task10() {
  const text = useSelector((state) => state.getLengthText);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Задача 10</h1>
      <p>
        Создайте компонент, который позволяет пользователю управлять размером
        текста на странице с помощью кнопок"увеличить"и"уменьшить".
      </p>

      <button onClick={() => dispatch(getPlusStr())}>+1</button>
      <button onClick={() => dispatch(getMinusStr())}>-1</button>
      <h1 style={{ fontSize: text }}>Hello</h1>
      <p>
        <Link to="/">Вернуться к главной странице</Link>
      </p>
    </>
  );
}

export default Task10;
