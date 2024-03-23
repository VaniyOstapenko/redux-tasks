import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getText, notGetText } from "../../Slice/see";

function Task6() {
  const text = useSelector((state) => state.see);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Задача 6</h1>
      <p>
        Создайте компонент, который предоставляет две кнопки: "Показать" и
        "Скрыть". При нажатии на "Показать" отображается текст, а при нажатии на
        "Скрыть" текст скрывается.
      </p>

      <button onClick={() => dispatch(getText())}>show</button>
      <button onClick={() => dispatch(notGetText())}>hide</button>
      <h1>{text ? "Text" : ""}</h1>
      <p>
        <Link to="/">Вернуться к главной странице</Link>
      </p>
    </>
  );
}

export default Task6;
