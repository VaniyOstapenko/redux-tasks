import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getEmail, getInput } from "../../Slice/validationEmail";

function Task7() {
  const inp = useSelector((state) => state.isValidEmail);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Задача 7</h1>
      <p>
        Создайте компонент, который отображает проверку почты (true, false) на
        валидность регулярному выражению. Валидатор состоит из Input для ввода
        почты и кнопки для запуска валидатора.
      </p>

      <h1>{inp}</h1>
      <input onChange={(e) => dispatch(getInput(e.target.value))} type="text" />
      <button onClick={() => dispatch(getEmail())}>Click me</button>
      <p>
        <Link to="/">Вернуться к главной странице</Link>
      </p>
    </>
  );
}

export default Task7;
