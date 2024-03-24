import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getInput } from "../../Slice/validationEmail";

function Task7() {
  const text = useSelector((state) => state.validationEmail);
  const dispatch = useDispatch();

  function clickButton() {
    if (/^[A-Za-z0-9]+\@+[a-z]+\.[a-z]{2,4}$/gm.test(text)) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
  return (
    <>
      <h1>Задача 7</h1>
      <p>
        Создайте компонент, который отображает проверку почты (true, false) на
        валидность регулярному выражению. Валидатор состоит из Input для ввода
        почты и кнопки для запуска валидатора.
      </p>

      <button onClick={clickButton}>Click me</button>
      <input onChange={(e) => dispatch(getInput(e.target.value))} type="text" />
      <p>
        <Link to="/">Вернуться к главной странице</Link>
      </p>
    </>
  );
}

export default Task7;
